import ReactMarkdown from 'react-markdown';
import '../../Stylings/Result.css'

function Result ({imagePreview, setPage, analysisResult}) {
    return(
        <section className="Result">
            <div className="result-containers image">
                <button className="button go-back" onClick={() => setPage("home")}>
                    Kembali
                </button>
                <div 
                    className='image-container'
                    style={{ backgroundImage: `url(${imagePreview})` }}
                />
            </div>
            <div className='result-containers pest-description'>
                <ReactMarkdown>{analysisResult || "Sedang menganalisis..."}</ReactMarkdown>
            </div>
        </section>
    )
};

export default Result;