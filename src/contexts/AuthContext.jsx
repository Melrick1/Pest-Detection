import { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "../config/Firebase/FirebaseAPI";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

//Custom Hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            console.log('User is signed in:', user.uid);
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } 
        else {
            console.log('User is a guest');
            setCurrentUser(null);
            setUserLoggedIn(false);
        }

        setLoading(false);
    }

    const value = {
        userLoggedIn,
        currentUser,
        setCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}