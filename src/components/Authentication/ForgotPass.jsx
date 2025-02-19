import { useState } from 'react';
import { Link } from 'react-router'
import { ResetPasswordReq } from './AuthFunction';

const ForgotPass = () => {
    const [email, setEmail ]= useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const resetHandler = (e) => {
        e.preventDefault(); //prevent page reload on form submit
        ResetPasswordReq(email, setErrorMessage)
    }
    
    return(
        <section>
            <div className='auth-container'>
                <h1>Reset <br/>Password</h1>

                <p className={errorMessage == "Permintahan reset password telah dikirim, cek email anda" ? 
                "success auth-message" : "error auth-message"}>&nbsp;{errorMessage}</p>

                <label>Masukkan Email anda :</label>
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
                        <Link to='/' className="link-button">Kembali</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ForgotPass