import { useState, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import analyzeImage from '../../../config/Gemini/GeminiAPI';
import { useAuth } from '../../../contexts/AuthContext';
import '../Stylings/Home.css'

function Home ({setPage, setImagePreview, imagePreview, setAnalysisResult}) {
    const [file, setFile] = useState();
    const [base64Image, setBase64Image] = useState();
    const { userLoggedIn, currentUser } = useAuth();

    // Convert image file to Base64
    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(",")[1]); // Extract Base64 part
            reader.onerror = (error) => reject(error);
        });
    }

    const onDrop = useCallback(async (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));

            const base64Data = await fileToBase64(selectedFile);
            setBase64Image(base64Data); // Store Base64 for API request
        }
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {'image/*' : []},})

    function formatFileSize(size) {
        if (size >= 1024 * 1024) {
            return (size / (1024 * 1024)).toFixed(2) + " MB"; // Convert to MB and round to 2 decimal places
        } else {
            return (size / 1024).toFixed(2) + " KB"; // Convert to KB and round to 2 decimal places
        }
    }

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
                {userLoggedIn ?(
                    <h2>Selamat datang, {currentUser.displayName}</h2>
                ) : (
                    <h2>Selamat datang, anda belum SignIn!</h2>
                )}
                
                <h2>Unggah gambar hama atau serangga tanaman anda di sini</h2>
                <p>
                    Unggah gambar tanaman Anda untuk membantu sistem mendeteksi jenis hama atau serangga, memahami dampak serangannya, serta memberikan panduan langkah-langkah penanganan yang efektif agar tanaman tetap sehat dan produktif.
                </p>
            </div>
            <div className='home-containers image'>
                <div 
                    className='image-container input-container '
                    style={{ backgroundImage: imagePreview ? `url(${imagePreview})` : "none"}}
                    {...getRootProps()}
                />
                <input {...getInputProps()}/>

                <div className='file-properties'>
                    {file ? (
                        <p>File : {file.name} <br/> {formatFileSize(file.size)}</p>
                    ) : (
                        <p className='hidden'>&nbps;<br/>&nbps;</p>
                    )}
                </div>

                <div className='deteksi'>
                    {/*Disable button when there's no image */}
                    <button className="button" onClick={handleDetection} disabled={!imagePreview} >
                        Deteksi Hama
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Home
