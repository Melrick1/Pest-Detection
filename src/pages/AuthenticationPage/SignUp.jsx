import { useState } from 'react';
import { Link } from 'react-router'
import { AuthSignUp } from '../../config/Firebase/AuthManager';
import EmailInput from '../../components/Inputs/EmailInput';
import PasswordInput from '../../components/Inputs/PasswordInput';
import NameInput from '../../components/Inputs/NameInput';

function SignUp () {
    //Firebase Auth
    const [name, setName] = useState('');
    const [email, setEmail ]= useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const SignUpHandler = async (e) => {
        e.preventDefault(); //stop page from reload on submit

        // Check if invalid
        if (name.trim() === ""){
            setErrorMessage("Nama pengguna diperlukan")
            return;
        }
        if (password1 !== password2) {
            setErrorMessage("Password tidak sama");
            return;
        }

        AuthSignUp(name, email, password1, setErrorMessage);
    }

    return(
        <section className='hero'>
            <div className="auth-container">
                <h3>Sign-Up</h3>
                <p className={errorMessage == "Sign Up Berhasil" ? "success auth-message" : "error auth-message"}>&nbsp;{errorMessage}</p>
                
                <form onSubmit={SignUpHandler}>
                    <NameInput name={name} setName={setName} />
                    <EmailInput email={email} setEmail={setEmail}/>
                    <PasswordInput password={password1} setPassword={setPassword1} />
                    <PasswordInput password={password2} setPassword={setPassword2} />

                    <Link to="/Sign-in" className='forgot'>Kembali ke login</Link>
                    <div className="buttons-auth">
                        <button type="submit" className="button">Sign up</button>   
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp;