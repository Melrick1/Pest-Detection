import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { writeData } from '../../utilities/DatabaseManager';
import AnalyzeImage from '../../utilities/AnalyzeImage';
import InputImage from "../../components/InputImage";
import JsonConfig from "../../utilities/JsonConfig";
import Layout from '../Layout';
import '../Stylings/Home.css';

function Home () {
    const { isLoggedIn, currentUser } = useAuth();
    const [file, setFile] = useState();
    const [base64Image, setBase64Image] = useState();
    const [analysisResult, setAnalysisResult] = useState(null);
    const [json, setJson] = useState();
    const [hasWritten, setHasWritten] = useState(false);
    const [imagePreview, setImagePreview] = useState("/images/PlaceholderInput.png")
    const navigate = useNavigate();

    async function makeJson(result) {
        if (
            result === "Gagal mendapatkan hasil analisis, mohon coba kembali dalam beberapa saat." ||
            !currentUser
        ) return;
    
        const jsonFormat = await JsonConfig(result);
        setJson(jsonFormat);
    }

    async function handleDetection() {
        if (!base64Image) return;

        setAnalysisResult(null);
        const result = await AnalyzeImage(base64Image);
        setAnalysisResult(result);
        await makeJson(result)
    }

    useEffect(() => {
        if (analysisResult) {
            navigate("/hasil", { state: { imagePreview, analysisResult } });
        }
    }, [analysisResult])

    //Add Json to Database
    useEffect(() => {
        if (json && !hasWritten) {
            writeData(currentUser.uid, json);
            setHasWritten(true); // Prevents re-execution
        }
    }, [json])

    return(
        <Layout pageName={"Beranda"}>
            <main className='Home'>
                <div className='home-containers title-container'>
                    {isLoggedIn ?(
                        <h2 className='home-welcome'>Selamat datang, {currentUser.displayName}</h2>
                    ) : (
                        <h2 className='home-welcome'>Selamat datang, anda belum SignIn!</h2>
                    )}
                    
                    <h2 className="home-title">Unggah gambar hama atau serangga tanaman anda di sini</h2>
                    <p>
                        Unggah gambar tanaman anda untuk membantu sistem mendeteksi jenis hama atau serangga, serta memberikan panduan langkah-langkah penanganan yang efektif agar tanaman tetap sehat dan produktif.
                    </p>
                </div>
                <div className='home-containers image'>
                    <InputImage 
                        file={file} 
                        setFile={setFile} 
                        imagePreview={imagePreview} 
                        setImagePreview={setImagePreview} 
                        setBase64Image={setBase64Image}
                    />

                    <div className='deteksi'>
                        <button className="button deteksi" onClick={handleDetection} disabled={imagePreview == "/images/PlaceholderInput.png" } >
                            Deteksi Hama
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    )
};

export default Home
