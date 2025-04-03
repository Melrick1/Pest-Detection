import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { readData } from "../../config/Firebase/DatabaseManager";
import { Link } from "react-router";
import Layout from "../Layout";
import Histories from "../../components/Histories";
import SortData from "../../Utilities/SortData";
import "../Stylings/HistoryList.css"

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);
  const { currentUser, isLoggedIn } = useAuth();

  // Fetch History
  useEffect(() => {
    async function FetchHistory () {
      if (!currentUser) return;
      
      try {
        const data = await readData(currentUser.uid);
        const sortedData = await SortData(data)
        setHistoryList(sortedData);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    }
    FetchHistory()
  }, [currentUser]);

  return (
    <>
      <Layout pageName={"Riwayat"}/>
      <section className="History-list">
        {isLoggedIn ? (
          historyList.length === 0 ? (
            <>
              <h2>Anda belum ada riwayat</h2>
              <h3>Silahkan melakukan deteksi di halaman beranda</h3>
            </>
          ) : (
            historyList.map((item) => (
              <Histories key={item.id} historyItem={item} />
            ))
          )
        ):(
          <>
            <h2>Anda belum Sign-In!</h2>
            <h3>Anda belum bisa melihat riwayat sebelum Sign-In</h3>
            <Link to="/Sign-in" className="button">Sign in</Link>
          </>
        )}
      </section>
    </>
  );
}

export default HistoryList;
