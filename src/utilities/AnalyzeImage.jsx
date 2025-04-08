import model from "../config/GeminiAPI";

async function AnalyzeImage(imageBase64) {
    try {
        // Fetch the prompt template from public/prompt.md
        const response = await fetch("/prompt.md");
        const promptTemplate = await response.text();

        // Send image to Gemini API
        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: promptTemplate },
                        { inline_data: { mime_type: "image/jpeg", data: imageBase64 } },
                    ],
                },
            ],
        });

        const aiResponse = result.response.text();
        return aiResponse;
    } catch (error) {
        console.error("Error getting Gemini response:", error);
        return "Gagal mendapatkan hasil analisis, mohon coba kembali dalam beberapa saat.";
    }
}

export default AnalyzeImage