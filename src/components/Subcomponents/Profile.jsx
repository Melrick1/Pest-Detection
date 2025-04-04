import { useAuth } from "../../contexts/AuthContext"

function Profile() {
    const { isLoggedIn, currentUser } = useAuth();

    return ( 
        <li className="nav-item">
            <div className="profile-details">
                <i className="nav-icon bi bi-person-circle"></i>
                {isLoggedIn ?(
                    <div className="profile-names">
                        <h3>{currentUser.displayName}</h3>
                        <p className="profile-email">{currentUser.email}</p>
                    </div>
                ) : (
                    <h3>Tamu</h3>
                )}
            </div>
        </li>
    )
}

export default Profile