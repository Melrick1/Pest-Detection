import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useSearchParams } from "react-router";
import Layout from "../Layout";
import Histories from "../../components/Histories";
import Pagination from "../../components/Paginations";
import "../Stylings/HistoryList.css"

function HistoryList() {
  const { historyList, isLoggedIn } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const postsPerPage = 5;

  const lastHistoryIndex = currentPage * postsPerPage;
  const firstHistoryIndex = lastHistoryIndex - postsPerPage;
  const currentHistories = historyList.slice(firstHistoryIndex, lastHistoryIndex);
  const lastPage = Math.ceil(historyList.length / postsPerPage);

  useEffect(() => {
    console.log(historyList)
  },[historyList])

  // Page state
  const NotLoggedIn = (
    <>
      <h2>Anda belum Sign-In!</h2>
      <h3>Anda belum bisa melihat riwayat sebelum Sign-In</h3>
      <Link to="/Sign-in" className="button">Sign in</Link>
    </>
  );

  const NoHistory = (
    <>
      <h2>Anda belum ada riwayat</h2>
      <h3>Silahkan melakukan deteksi di halaman beranda</h3>
    </>
  );

  const HistoryContent = (
    <>
      {currentHistories.map((item) => (
        <Histories key={item.id} historyItem={item} />
      ))}
      <Pagination currentPage={currentPage} setSearchParams={setSearchParams} lastPage={lastPage} />
    </>
  );
  
  return (
    <>
      <Layout pageName={"Riwayat"}/>
      <section className="History-list">
        {!isLoggedIn ? NotLoggedIn : 
        historyList.length === 0 ? NoHistory : 
        HistoryContent}
      </section>
    </>
  );
}

export default HistoryList;
