import { ref, get, update } from "firebase/database";
import { fireDB } from "./FirebaseAPI";

function writeData (userID, data) {
    const analysisID = crypto.randomUUID(); // Generate a unique ID
    const reference = ref(fireDB, `users/${userID}/${analysisID}`)

    update(reference, data)
        .then(() => console.log("Tersimpan ke riwayat"))
        .catch((error) => console.error("Upload ke riwayat gagal: ", error));
}

async function readData(userID) {
    try {
        const reference = ref(fireDB, `users/${userID}`);
        const snapshot = await get(reference);
        const data = snapshot.val();

        // Convert JSON object to an array
        const dataArray = data
            ? Object.entries(data).map(([key, value]) => ({
                id: key,
                ...value,
            }))
        : [];

        console.log("Data received:", dataArray);
        return dataArray;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export { writeData, readData }