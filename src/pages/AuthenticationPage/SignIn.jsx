import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { AuthSignIn } from '../../config/Firebase/AuthManager';
import { useAuth } from '../../contexts/AuthContext';
import EmailInput from '../../components/Inputs/EmailInput';
import PasswordInput from '../../components/Inputs/PasswordInput';
import './AuthStyling.css'

function SignIn() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const SignInHandler = async (e) => {
        e.preventDefault(); //prevent page reload on form submit
        AuthSignIn(email, password, navigate, setErrorMessage);
    }

    useEffect(() => {
        if ( isLoggedIn == true) {
            navigate("/")
        }
    }, []);

    return(
        <section className='hero'>
            <div className="auth-container">
                <h3>Sign-In</h3>
                <p className='error auth-message'>&nbsp;{errorMessage}</p>
                
                <form onSubmit={SignInHandler}>
                    <EmailInput email={email} setEmail={setEmail}/>
                    <PasswordInput password={password} setPassword={setPassword} />

                    <Link to="/Forgot-Pass" className='forgot' >Lupa password?</Link>
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