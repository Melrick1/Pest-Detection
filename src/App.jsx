import { Routes, Route} from "react-router";
import LandingPage from "./pages/LandingPage";
import SignIn from './pages/AuthenticationPage/SignIn.jsx';
import SignUp from './pages/AuthenticationPage/SignUp.jsx';
import ForgotPass from './pages/AuthenticationPage/ForgotPass.jsx';
import HistoryList from "./pages/HistoryPage/HistoryList.jsx";
import HistoryResult from "./pages/HistoryPage/HistoryResult.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/Forgot-Pass" element={<ForgotPass />} />
      <Route path="/riwayat" element={<HistoryList />}/>
      <Route path="/hasil-riwayat" element={<HistoryResult />}/>
    </Routes>
  )
}

export default App
