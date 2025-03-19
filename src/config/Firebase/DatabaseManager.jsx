import { ref, set, update } from "firebase/database";
import { fireDB } from "./FirebaseAPI";
import { useAuth } from "../../contexts/AuthContext";

function writeData (userID, jsonFormat){
    const analysisID = crypto.randomUUID(); // Generate a unique ID

    const reference = ref(fireDB, `users/${userID}/${analysisID}`)

    update(reference, jsonFormat)
        .then(() => console.log("Tersimpan ke riwayat"))
        .catch((error) => console.error("Upload ke riwayat gagal: ", error));
}

export default writeData