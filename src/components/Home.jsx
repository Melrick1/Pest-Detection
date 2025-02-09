import { useState, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import './Home.css'

function Home () {
    const [imagePreview, setImagePreview] = useState();
    const [file, setFile] = useState();

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
        }
    }, [])
    
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: {'image/*' : []},})
    
    // function handleFileChange(e){
    //     if(e.target.files){
    //         const selectedFile = e.target.files[0];
    //         setFile(selectedFile);
    //         setImagePreview(URL.createObjectURL(selectedFile))
    //     }
    // }

    function formatFileSize(size) {
        if (size >= 1024 * 1024) {
            return (size / (1024 * 1024)).toFixed(2) + " MB"; // Convert to MB and round to 2 decimal places
        } else {
            return (size / 1024).toFixed(2) + " KB"; // Convert to KB and round to 2 decimal places
        }
    }

    return(
        <section className='Home'>
            <div className='flex-card title'>
                <h1>Unggah gambar hama atau serangga tanaman Anda di sini</h1>
                <p>
                    Unggah gambar tanaman Anda untuk membantu sistem mendeteksi jenis hama atau serangga, memahami dampak serangannya, serta memberikan panduan langkah-langkah penanganan yang efektif agar tanaman tetap sehat dan produktif."
                </p>
            </div>
            <div className='flex-card image'>
                <div 
                    className='input-box'
                    style={{ backgroundImage: imagePreview ? `url(${imagePreview})` : "none"}}
                    {...getRootProps()}
                    // onClick={() => document.getElementById('fileInput').click()} 
                />

                <input 
                    {...getInputProps()}
                    // type='file' 
                    // accept='image/*'
                    // id='fileInput' 
                    // onChange={handleFileChange} 
                    // style={{display: "none"}}
                />

                {file && (
                    <div className='file-properties'>
                        <p>File : {file.name}</p>
                        <p>{formatFileSize(file.size)} KB</p>
                    </div>
                )}
            </div>
        </section>
    )
};

export default Home
