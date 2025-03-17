import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { AuthSignIn } from '../../config/Firebase/AuthFunction.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';
import usePasswordToggle from './PasswordToggle.jsx';
import './AuthStyling.css'

function SignIn() {
    const navigate = useNavigate();
    const { userLoggedIn, currentUser } = useAuth();
    
    //Show password
    const { showPassword1, handleTogglePassword1 } = usePasswordToggle();

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const SignInHandler = async (e) => {
        e.preventDefault(); //prevent page reload on form submit
        AuthSignIn(email, password, navigate, setErrorMessage);
    }

    useEffect(() => {
        if ( userLoggedIn == true) {
            navigate("/")
        }
    }, []);

    return(
        <section className='hero'>
            <div className="auth-container">
                <h3>Sign-In</h3>
                <p className='error auth-message'>&nbsp;{errorMessage}</p>
                <form onSubmit={SignInHandler}>
                    {/* Email input */}
                    <div className="form-content">
                        <input 
                            className='inputbox email' 
                            type="email" 
                            placeholder="Alamat Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>

                    {/* Password input */}
                    <div className="form-content">
                        <input 
                            className='inputbox pass' 
                            type={showPassword1 ? "text" : "password"}  
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>
                        </input>
                        <span onClick={handleTogglePassword1}>
                            <i className={`bi bi-eye${showPassword1 ? '-slash' : ''}`}></i>
                        </span>
                    </div>

                    <Link to="/ForgotPass" className='forgot' >Lupa password?</Link>
                    <div className="buttons-auth">
                        <button type="submit" className="button">Sign in</button>
                        <Link to="/Sign-up" className="link-button">Sign up</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignIn;