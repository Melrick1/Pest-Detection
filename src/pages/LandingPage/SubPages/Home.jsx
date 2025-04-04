import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import analyzeImage from '../../../config/Gemini/GeminiAPI';
import InputImage from '../../../components/InputImage';
import '../../Stylings/Home.css'

function Home ({ setImagePreview, imagePreview }) {
    const { isLoggedIn, currentUser } = useAuth();
    const [file, setFile] = useState();
    const [base64Image, setBase64Image] = useState();
    const [analysisResult, setAnalysisResult] = useState(null);
    const [json, setJson] = useState();
    const [hasWritten, setHasWritten] = useState(false);
    const navigate = useNavigate();

    async function handleDetection() {
        if (!base64Image) return;

        setAnalysisResult(null);
        const result = await analyzeImage(base64Image);
        setAnalysisResult(result);
    }

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
                navigate("/hasil", { state: { analysisResult, imagePreview } });
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

    return(
        <section className='Home'>
            <div className='home-containers title'>
                {isLoggedIn ?(
                    <h2 className='home-welcome'>Selamat datang, {currentUser.displayName}</h2>
                ) : (
                    <h2 className='home-welcome'>Selamat datang, anda belum SignIn!</h2>
                )}
                
                <h2>Unggah gambar hama atau serangga tanaman anda di sini</h2>
                <p>
                    Unggah gambar tanaman anda untuk membantu sistem mendeteksi jenis hama atau serangga, memahami dampak serangannya, serta memberikan panduan langkah-langkah penanganan yang efektif agar tanaman tetap sehat dan produktif.
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
                    <button className="button" onClick={handleDetection} disabled={!imagePreview} >
                        Deteksi Hama
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Home
