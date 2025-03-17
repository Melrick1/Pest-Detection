import '../Stylings/Result.css'
import ReactMarkdown from 'react-markdown';

function Result ({imagePreview, setPage, analysisResult}) {
    return(
        <section className="Result">
            <button className="button go-back'" onClick={() => setPage("home")}>
                Kembali
            </button>
            <div className='result-containers'>
                <h1>Title</h1>
            </div>
            <div className="result-containers image">
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