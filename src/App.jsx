import { Routes, Route} from "react-router";
import Landingpage from "./components/LandingPage/Landingpage.jsx";
import SignIn from './components/Authentication/SignIn.jsx';
import SignUp from './components/Authentication/SignUp.jsx';
import ForgotPass from './components/Authentication/ForgotPass.jsx';
import DetectionHistory from "./components/History/DetectionHistory.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/Forgot-Pass" element={<ForgotPass />} />
        <Route path="/riwayat" element={<DetectionHistory />}/>
      </Routes>
    </>
  )
}

export default App
