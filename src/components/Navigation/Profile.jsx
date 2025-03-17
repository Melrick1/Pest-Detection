import { useAuth } from "../../contexts/AuthContext"

function Profile() {
    const { userLoggedIn, currentUser } = useAuth();

    return (
        <>  
            <div className="profileDetails">
                <i className="nav-icon bi bi-person-circle"></i>
                {userLoggedIn ?(
                    <div>
                        <h3>{currentUser.displayName}</h3>
                        <p>{currentUser.email}</p>
                    </div>
                ) : (
                    <h3>Tamu</h3>
                )}
            </div>
        </>
    )
}

export default Profile