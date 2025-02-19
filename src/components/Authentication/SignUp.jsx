import { useState } from 'react';
import { Link } from 'react-router'
import { AuthSignUp } from './AuthFunction.jsx';
import usePasswordToggle from './ShowPassword.jsx';

const SignUp = () => {
    const { showPassword1, showPassword2, handleTogglePassword1, handleTogglePassword2 } = usePasswordToggle();

    //Firebase Auth
    const [Name, setName] = useState('');
    const [email, setEmail ]= useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState(''); //Re-enter password
    const [errorMessage, setErrorMessage] = useState('')

    const SignUpHandler = async (e) => {
        e.preventDefault(); //stop page from reload on submit

        // Check if invalid
        if (Name.trim() === ""){
            setErrorMessage("Nama pengguna diperlukan")
            return;
        }
        if (password1 !== password2) {
            setErrorMessage("Password tidak sama");
            return;
        }

        AuthSignUp(Name, email, password1, setErrorMessage);
    }

    return(
        <section>
            <div className="auth-container signup-container">
                <h1>Sign-Up</h1>

                <p className={errorMessage == "Sign Up Berhasil" ? "success auth-message" : "error auth-message"}>&nbsp;{errorMessage}</p>
                <form onSubmit={SignUpHandler}>
                    <label>Masukkan data anda :</label>

                    {/* Name input */}
                    <div className="form-content">
                        <input
                            className='inputbox email'
                            type="text"
                            placeholder="Nama pengguna"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                    </div>

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

                    {/* Password input 1 */}
                    <div className="form-content">
                        <input 
                            className='inputbox pass' 
                            type={showPassword1 ? "text" : "password"}  
                            placeholder="Password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}>
                        </input>
                        <span className="input-group-text" onClick={handleTogglePassword1}>
                            <i className={`bi bi-eye${showPassword1 ? '-slash' : ''}`}></i>
                        </span>
                    </div>

                    {/* Password input 2 */}
                    <div className="form-content">
                        <input 
                            className='inputbox pass' 
                            type={showPassword2 ? "text" : "password"}  
                            placeholder="Masukkan Kembali Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}>
                        </input>
                        <span className="input-group-text" onClick={handleTogglePassword2}>
                            <i className={`bi bi-eye${showPassword2 ? '-slash' : ''}`}></i>
                        </span>
                    </div>

                    <Link to="/">Back to login</Link>
                    <button type="submit" className="button">Sign up</button>
                </form>
            </div>
        </section>
    )
}

export default SignUp;