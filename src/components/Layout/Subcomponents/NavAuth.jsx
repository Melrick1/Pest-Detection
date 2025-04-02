import { useAuth } from "../../../contexts/AuthContext";
import { AuthSignOut } from "../../../config/Firebase/AuthManager";
import { useNavigate } from "react-router";

function NavAuth() {
    const { isLoggedIn } = useAuth
    const navigate = useNavigate()

    const handleSignOut = async () => {
        await AuthSignOut();
        navigate('/Sign-in')
    }

    return (
        <li className="nav-item">
            <div className='nav-link Sign-in' onClick={handleSignOut}>
              {isLoggedIn ? (
                <>
                  <i className='nav-icon bi bi-box-arrow-left'></i>
                  <span>Keluar</span>
                </>
              ) : (
                <>
                  <i className='nav-icon bi bi-box-arrow-in-right'></i>
                  <span>Masuk</span>
                </>
              )}
            </div>
        </li>
    )
}

export default NavAuth