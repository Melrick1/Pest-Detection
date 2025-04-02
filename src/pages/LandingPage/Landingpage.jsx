import { useEffect, useState } from "react"
import { writeData } from "../../config/Firebase/DatabaseManager";
import { useAuth } from "../../contexts/AuthContext";
import Layout from "../Layout";
import Home from "./SubPages/Home"
import Result from "./SubPages/Result"
import JsonConfig from "../../config/Utilities/JsonConfig";

function LandingPage () {
    const [page, setPage] = useState("home");
    const [imagePreview, setImagePreview] = useState();
    const [analysisResult, setAnalysisResult] = useState(null);
    const [json, setJson] = useState();
    const [hasWritten, setHasWritten] = useState(false);
    const { currentUser } = useAuth();

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

    useEffect(() => {
        if (json && !hasWritten) {
            writeData(currentUser.uid, json);
            setHasWritten(true); // Prevents re-execution
        }
    }, [json])

    return (
        <>
            <Layout pageName={"Beranda"}/>
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

export default LandingPage