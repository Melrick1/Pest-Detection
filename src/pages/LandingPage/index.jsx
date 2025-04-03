import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext";
import { writeData } from "../../config/Firebase/DatabaseManager";
import Layout from "../Layout";
import Home from "./SubPages/Home"
import Result from "./SubPages/Result"
import JsonConfig from "../../Utilities/JsonConfig";

function LandingPage () {
    const { currentUser } = useAuth();

    const [page, setPage] = useState("home");
    const [json, setJson] = useState();
    const [hasWritten, setHasWritten] = useState(false);
    const [imagePreview, setImagePreview] = useState();
    const [analysisResult, setAnalysisResult] = useState(null);

    //turn analysisResult into Json format
    useEffect(() => {
        async function makeJson() {
            console.log(analysisResult)
            if (analysisResult == "Gagal mendapatkan hasil analisis, mohon coba kembali dalam beberapa saat.") {
                return;
            } 
            if (analysisResult && !currentUser) {
                console.log("%cSignIn to save to History!", "font-weight: 900; font-size: 20px;");
                return;
            }
            if (analysisResult && !json) {
                const jsonFormat = await JsonConfig(analysisResult)
                setJson(jsonFormat);
            }
        }
        makeJson()
    }, [analysisResult])

    //Add Json to Database
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