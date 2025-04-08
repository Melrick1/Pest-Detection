import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../config/FirebaseAPI";
import { readData } from "../utilities/DatabaseManager";
import SortData from "../utilities/SortData";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [historyList, setHistoryList] = useState([]);
    const [loading, setLoading] = useState(true);

    // Detect Auth Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, initializeUser);
        return unsubscribe;
    }, []);

    // Fetch History
    useEffect(() => {
        if (!currentUser) return;
    
        // Call listener
        const unsubscribe = readData(currentUser.uid, handleData);
        // Call Stop listener
        return unsubscribe;
    }, [currentUser]);

    async function initializeUser(user) {
        if (user) {
            console.log('User is signed in:', user.uid);
            setCurrentUser({ ...user });
            setIsLoggedIn(true);
        } 
        else {
            console.log('User is a guest');
            setCurrentUser(null);
            setIsLoggedIn(false);
        }

        setLoading(false);
    }

    async function handleData(data) {
        const sorted = await SortData(data);
        setHistoryList(sorted);
    }

    const value = {
        isLoggedIn,
        currentUser,
        setCurrentUser,
        historyList,
        setHistoryList
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}