function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]); // Extract Base64 part
        reader.onerror = (error) => reject(error);
    });
}

function formatFileSize(size) {
    //rounded to 2 decimal places
    if (size >= 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(2) + " MB";
    } else {
        return (size / 1024).toFixed(2) + " KB";
    }
}

export { fileToBase64, formatFileSize }