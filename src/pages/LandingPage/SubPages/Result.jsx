import { useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../../Stylings/Result.css'
import Layout from '../../Layout';

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
        <>
            <Layout pageName={"Hasil"}/>
            <section className="Result">
                <div className="result-containers image">
                    <button className="button go-back">
                        Kembali
                    </button>
                    <div 
                        className='image-container'
                        style={{ backgroundImage: `url(${imagePreview})` }}
                    />
                </div>
                <div className='result-containers pest-description'>
                    <ReactMarkdown>{analysisResult}</ReactMarkdown>
                </div>
            </section>
        </>
    )
};

export default Result;