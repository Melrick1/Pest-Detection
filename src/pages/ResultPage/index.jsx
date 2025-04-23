import { useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../Layout';
import '../Stylings/Result.css'

function Result () {
    const navigate = useNavigate();
    const location = useLocation();

    const { imagePreview, analysisResult } = location.state || {};
    
    if (!analysisResult) {
        navigate("/")
    }
    
    useEffect(() => {
        console.log("my result:", analysisResult)
    }, [analysisResult])

    return(
        <Layout pageName={"Hasil"}>
            <section className="Result">
                <div className="result-containers image">
                    <button className="button go-back" onClick={() => {navigate(-1)}}>
                        Kembali
                    </button>
                    <div 
                        className='image-container result-image'
                        style={{ backgroundImage: `url(${imagePreview})` }}
                    />
                </div>
                <div className='result-containers pest-description'>
                    <ReactMarkdown>{analysisResult}</ReactMarkdown>
                </div>
            </section>
        </Layout>
    )
};

export default Result;