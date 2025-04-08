import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { fileToBase64, formatFileSize } from "../utilities/FileConfig";

function InputImage({ file, setFile, imagePreview, setImagePreview, setBase64Image }) {
    //image Dropbox
    const onDrop = useCallback(async (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));

            const base64Data = await fileToBase64(selectedFile);
            setBase64Image(base64Data);
        }
    }, [])
        
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {'image/*' : []},})

    return (
        <>
            {/* File DropZone */}
            <div 
                className='image-container input-container '
                style={{ backgroundImage: imagePreview ? `url(${imagePreview})` : "none"}}
                {...getRootProps()}
            >

                <input {...getInputProps()}/>
            </div>

            {/* File Properties */}
            <div className='file-properties'>
                {file ? (
                    <p>File : {file.name} <br/> {formatFileSize(file.size)}</p>
                ) : (
                    <p className='hidden'>&nbps;<br/>&nbps;</p>
                )}
            </div>
        </>
    )
}

export default InputImage