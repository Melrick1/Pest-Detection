import { useLocation, useNavigate } from "react-router";
import ReactMarkdown from 'react-markdown';
import Layout from "../Layout";

function HistoryResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const { historyItem } = location.state || {};

  if (!historyItem) {
    navigate("/riwayat")
  }

  return (
    <>
      <Layout pageName={historyItem.nama_ilmiah}>
        <section className="Result">
          <button className="button go-back" onClick={() => {navigate(-1)}}>
              Kembali
          </button>
          <div className='result-containers pest-description history-result'>
            <ReactMarkdown>{historyItem.fullText}</ReactMarkdown>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default HistoryResult