
function HistoryItem({ historyItem }) {
    return (
        <div className="history-item">
            <div>
                <h3>Nama Ilmiah : {historyItem.nama_ilmiah}</h3>
                <h4>Nama Umum : {historyItem.nama_umum}</h4>
            </div>
            <div className="history-date">
                <p>{historyItem.date}</p>
                <p>{historyItem.time}</p>
            </div>
        </div>
    )
}

export default HistoryItem