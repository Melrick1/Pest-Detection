import { useNavigate } from "react-router"
import './Stylings/Histories.css'

function Histories({ historyItem }) {
    const navigate = useNavigate();

    function handleItemClick(){
        navigate("/hasil-riwayat", { state: { historyItem } });
    }

    return (
        <div className="history-item" onClick={handleItemClick}>
            <div>
                <h4>Nama Ilmiah : {historyItem.nama_ilmiah}</h4>
                <h4>Nama Umum : {historyItem.nama_umum}</h4>
            </div>
            <div className="history-date">
                <p>{historyItem.date}</p>
                <p>{historyItem.time}</p>
            </div>
        </div>
    )
}

export default Histories