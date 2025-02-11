import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Result from './components/Result'

function App() {
  const [page, setPage] = useState("home");
  const [imagePreview, setImagePreview] = useState();
  const [analysisResult, setAnalysisResult] = useState();

  return (
    <>
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
