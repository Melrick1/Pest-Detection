import { useState } from 'react';
import { Link } from 'react-router'
import { ResetPasswordReq } from '../../utilities/AuthManager';
import InputEmail from '../../components/InputEmail';

function ForgotPass () {
    const [email, setEmail ]= useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const resetHandler = (e) => {
        e.preventDefault(); //prevent page reload on form submit
        ResetPasswordReq(email, setErrorMessage)
    }
    
    return(
        <section className='hero reset-section'>
            <h1>Reset <br/>Password</h1>
            <div className='auth-container forgot-container'>
                <h3>Masukkan Email anda :</h3>
                <p className={errorMessage == "Permintahan reset password telah dikirim, cek email anda" ? 
                "success auth-message" : "error auth-message"}>&nbsp;{errorMessage}</p>

                <form onSubmit={resetHandler}>
                    <InputEmail email={email} setEmail={setEmail}/>

                    <div className="buttons-forgotpass">
                        <Link to='/Sign-in' className="link-button">Kembali</Link>
                        <button type="submit" className="button">Reset Password</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ForgotPass