import { ref, set, onValue, off } from "firebase/database";
import { fireDB } from "../config/FirebaseAPI";

function writeData (userID, data) {
    const analysisID = crypto.randomUUID(); // Generate a unique ID
    const reference = ref(fireDB, `Users/${userID}/${analysisID}`)

    set(reference, data)
        .then(() => console.log("Tersimpan ke riwayat"))
        .catch((error) => console.error("Upload ke riwayat gagal: ", error));
}

function readData(userID, callback) {
    if (!userID) return;
  
    const reference = ref(fireDB, `Users/${userID}`);
    
    // Firebase Listener (real-time)
    onValue(reference, (snapshot) => {
        const data = snapshot.val();

        const dataArray = data
            ? Object.entries(data).map(([key, value]) => ({
                id: key,
                ...value,
            }))
            : [];

        callback(dataArray);
     });

    // Stop listener
    return () => off(reference);
}

export { writeData, readData }