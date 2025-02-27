import { useState } from 'react'
import Home from './components/LandingPage/Home'
import Result from './components/LandingPage/Result'
import MyHeader from './components/Navigation/MyHeader';

function App() {
  const [page, setPage] = useState("home");
  const [imagePreview, setImagePreview] = useState();
  const [analysisResult, setAnalysisResult] = useState();

  return (
    <>
      <MyHeader />
      {page === "home" && <Home 
        setPage={setPage} 
        imagePreview={imagePreview} 
        setImagePreview={setImagePreview} 
        setAnalysisResult={setAnalysisResult} 
      />}
      {page === "result" && <Result 
        setPage={setPage} 
        imagePreview={imagePreview} 
        analysisResult={analysisResult} 
      />}
    </>
  )
}

export default App
