import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import analyzeImage from '../../../config/Gemini/GeminiAPI';
import InputImage from '../../../components/InputImage';
import '../../Stylings/Home.css'

function Home ({setPage, setImagePreview, imagePreview, setAnalysisResult}) {
    const { isLoggedIn, currentUser } = useAuth();

    const [file, setFile] = useState();
    const [base64Image, setBase64Image] = useState();

    async function handleDetection() {
        if (!base64Image) return;
        setAnalysisResult(null);
        setPage("result");

        const result = await analyzeImage(base64Image);
        setAnalysisResult(result);
    }

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
