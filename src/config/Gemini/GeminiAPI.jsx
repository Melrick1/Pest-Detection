import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCjblKJcOl2b0RzM-iBQdiI5ZL6SYuUtsY";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function analyzeImage(imageBase64) {
    try {
        // Fetch the prompt template from public/prompt.md
        const response = await fetch("/prompt.md");
        const promptTemplate = await response.text();

        // Replace {image} placeholder in the prompt
        const prompt = promptTemplate.replace("{image}", "[Image data]"); // Gemini cannot process raw Base64 in text

        // Send image to Gemini API
        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt },
                        { inline_data: { mime_type: "image/jpeg", data: imageBase64 } },
                    ],
                },
            ],
        });

        return result.response.text();
    } catch (error) {
        console.error("Error getting Gemini response:", error);
        return "Gagal mendapatkan hasil analisis.";
    }
}

export default analyzeImage;
