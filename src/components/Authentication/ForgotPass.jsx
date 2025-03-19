import { useState } from 'react';
import { Link } from 'react-router'
import { ResetPasswordReq } from '../../config/Firebase/AuthManager';

function ForgotPass () {
    const [email, setEmail ]= useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const resetHandler = (e) => {
        e.preventDefault(); //prevent page reload on form submit
        ResetPasswordReq(email, setErrorMessage)
    }
    
    return(
        <section className='hero'>
            <h1>Reset <br/>Password</h1>
            <div className='auth-container forgot-container'>
                <h3>Masukkan Email anda :</h3>
                <p className={errorMessage == "Permintahan reset password telah dikirim, cek email anda" ? 
                "success auth-message" : "error auth-message"}>&nbsp;{errorMessage}</p>

                <form onSubmit={resetHandler}>
                    <div className="form-content">
                        <input
                            className='inputbox email'
                            type="email"
                            placeholder="Alamat Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>

                    <div className="buttons-forgotpass">
                        <button type="submit" className="button">Reset Password</button>
                        <Link to='/Sign-in' className="link-button">Kembali</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ForgotPass