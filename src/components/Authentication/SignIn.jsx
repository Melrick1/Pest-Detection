import { useState } from 'react';
import { Link } from 'react-router'
import { Authenticate } from './AuthFunctions/AuthFunction.jsx';
import usePasswordToggle from './AuthFunctions/ShowPassword.jsx';
import './Signin.css'

const SignIn = () => {
    //Show password
    const { showPassword1, handleTogglePassword1 } = usePasswordToggle();

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const SignInHandler = async (e) => {
        e.preventDefault(); //prevent page reload on form submit
        Authenticate(email, password, navigate, setErrorMessage);
    }

    return(
        <section>
            <div className="login-container">
                <h1>Sign-In</h1>

                <p className='error auth-message'>&nbsp;{errorMessage}</p>
                <form onSubmit={SignInHandler}>
                    {/* Email input */}
                    <div className="form-content">
                        <input 
                            className='inputbox typed' 
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

                    <a className='forgot' href="#">Forgot password?</a>
                    <div className="buttons-sign-in">
                        <Link to="/Sign-up" className="link-button prev register">Sign up</Link>
                        <button type="submit" className="link-button login">Sign in</button>
                    </div>
                </form>
                <Link to="/Home" className="link-button back-to-homepage">Back to Homepage</Link>
            </div>
        </section>
    )
}

export default SignIn;