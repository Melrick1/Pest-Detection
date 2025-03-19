import { useEffect, useState } from "react"
import MyHeader from "../Navigation/MyHeader"
import Home from "./SubPages/Home"
import Result from "./SubPages/Result"
import JsonConfig from "../../config/Gemini/JsonConfig";
import writeData from "../../config/Firebase/DatabaseManager";
import { useAuth } from "../../contexts/AuthContext";

function Landingpage () {
    const [page, setPage] = useState("home");
    const [imagePreview, setImagePreview] = useState();
    const [analysisResult, setAnalysisResult] = useState(null);
    const [json, setJson] = useState();
    const [hasWritten, setHasWritten] = useState(false);
    const { isloggedin, currentUser } = useAuth();

    useEffect(() => {
        async function fetchJson() {
            if (analysisResult && !currentUser) {
                console.log(analysisResult)
                console.log("%cSignIn to save to History!", "font-weight: 900; font-size: 20px;");
                return;
            }
            if (analysisResult && !json) {
                console.log(analysisResult)
                const jsonFormat = await JsonConfig(analysisResult)
                setJson(jsonFormat);
            }
        }
        fetchJson()
    }, [analysisResult])

    // Keep seperate so it doesn't duplicate data
    useEffect(() => {
        if (json && !hasWritten) {
            writeData(currentUser.uid, json);
            setHasWritten(true); // Prevents re-execution
        }
    }, [json])

    return (
        <>
            <MyHeader />
            {page === "home" && <Home 
                setPage={setPage} 
                imagePreview={imagePreview} 
                setImagePreview={setImagePreview} 
                setAnalysisResult={setAnalysisResult} 
            />}
            {page === "result" && <Result 
                setPage={setPage} 
                imagePreview={imagePreview} 
                analysisResult={analysisResult} 
            />}
        </>
    )
}

export default Landingpage