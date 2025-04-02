import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { readData } from "../../config/Firebase/DatabaseManager";
import Layout from "../Layout";
import HistoryItem from "../../components/HistoryItems/HistoryItem";
import './HistoryItem.css'

function DetectionHistory() {
  const [historyList, setHistoryList] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    async function fetchHistory() {
      try {
        const data = await readData(currentUser.uid);

        // Sort data before setting state
        const sortedData = data.sort((a, b) => {
          const dateTimeA = new Date(a.date.split("/").reverse().join("-") + " " + (a.time || "00:00:00"));
          const dateTimeB = new Date(b.date.split("/").reverse().join("-") + " " + (b.time || "00:00:00"));
          return dateTimeB - dateTimeA; // Sort latest first
        });

        setHistoryList(sortedData);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    }

    fetchHistory();
  }, [currentUser]);

  return (
    <>
      <Layout pageName={"Riwayat"}/>
      <section className="Home history-list">
        {historyList.map((item) => (
          <HistoryItem key={item.id} historyItem={item} />
        ))}
      </section>
    </>
  );
}

export default DetectionHistory;
