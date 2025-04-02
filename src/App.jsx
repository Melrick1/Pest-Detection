import { Routes, Route} from "react-router";
import LandingPage from "./pages/LandingPage/Landingpage.jsx";
import SignIn from './pages/AuthenticationPage/SignIn.jsx';
import SignUp from './pages/AuthenticationPage/SignUp.jsx';
import ForgotPass from './pages/AuthenticationPage/ForgotPass.jsx';
import DetectionHistory from "./pages/HistoryPage/DetectionHistory.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/Forgot-Pass" element={<ForgotPass />} />
      <Route path="/riwayat" element={<DetectionHistory />}/>
    </Routes>
  )
}

export default App
