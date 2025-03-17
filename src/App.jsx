import { Routes, Route} from "react-router";
import Landingpage from "./components/LandingPage/Landingpage.jsx";
import SignIn from './components/Authentication/SignIn.jsx';
import SignUp from './components/Authentication/SignUp.jsx';
import ForgotPass from './components/Authentication/ForgotPass.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path='/ForgotPass' element={<ForgotPass />} />
      </Routes>
    </>
  )
}

export default App
