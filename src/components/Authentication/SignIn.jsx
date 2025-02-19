import { useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { AuthSignIn } from './AuthFunction.jsx';
import usePasswordToggle from './ShowPassword.jsx';
import './AuthStyling.css'

const SignIn = () => {
    const navigate = useNavigate();
    
    //Show password
    const { showPassword1, handleTogglePassword1 } = usePasswordToggle();

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const SignInHandler = async (e) => {
        e.preventDefault(); //prevent page reload on form submit
        AuthSignIn(email, password, navigate, setErrorMessage);
    }

    return(
        <section>
            <div className="auth-container">
                <h1>Sign-In</h1>

                <p className='error auth-message'>&nbsp;{errorMessage}</p>
                <form onSubmit={SignInHandler}>
                    {/* Email input */}
                    <div className="form-content">
                        <input 
                            className='inputbox email' 
                            type="email" 
                            placeholder="Email Address"
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

                    <a className='forgot' href="/ForgotPass">Lupa password?</a>
                    <div className="buttons-sign-in">
                        <button type="submit" className="button">Sign in</button>
                        <Link to="/Sign-up" className="link-button">Sign up</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignIn;