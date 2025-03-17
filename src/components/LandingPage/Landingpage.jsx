import { useState } from "react"
import MyHeader from "../Navigation/MyHeader"
import Home from "./SubPages/Home"
import Result from "./SubPages/Result"

function Landingpage () {
    const [page, setPage] = useState("home");
    const [imagePreview, setImagePreview] = useState();
    const [analysisResult, setAnalysisResult] = useState();

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