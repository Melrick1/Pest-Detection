import { Routes, Route} from "react-router";
import Home from "./pages/HomePage/index.jsx";
import Result from "./pages/ResultPage/index.jsx";
import SignIn from './pages/AuthenticationPage/SignIn.jsx';
import SignUp from './pages/AuthenticationPage/SignUp.jsx';
import ForgotPass from './pages/AuthenticationPage/ForgotPass.jsx';
import HistoryList from "./pages/HistoryPage/HistoryList.jsx";
import HistoryResult from "./pages/HistoryPage/HistoryResult.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hasil" element={<Result />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/Forgot-Pass" element={<ForgotPass />} />
      <Route path="/riwayat" element={<HistoryList />}/>
      <Route path="/hasil-riwayat" element={<HistoryResult />}/>
    </Routes>
  )
}

export default App
