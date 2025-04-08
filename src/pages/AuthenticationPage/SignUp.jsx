import { useState } from 'react';
import { Link } from 'react-router'
import { AuthSignUp } from '../../utilities/AuthManager';
import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';
import InputEmail from '../../components/InputEmail';

function SignUp () {
    const [name, setName] = useState('');
    const [email, setEmail ]= useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const SignUpHandler = async (e) => {
        e.preventDefault(); //stop page from reload on submit
        AuthSignUp(name, email, password1, password2, setErrorMessage);
    }

    return(
        <section className='hero'>
            <div className="auth-container">
                <h3>Sign-Up</h3>
                <p className={errorMessage == "Sign Up Berhasil" ? "success auth-message" : "error auth-message"}>&nbsp;{errorMessage}</p>
                
                <form onSubmit={SignUpHandler}>
                    <InputText name={name} setName={setName}/>
                    <InputEmail email={email} setEmail={setEmail}/>
                    <InputPassword password={password1} setPassword={setPassword1} />
                    <InputPassword password={password2} setPassword={setPassword2} />

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