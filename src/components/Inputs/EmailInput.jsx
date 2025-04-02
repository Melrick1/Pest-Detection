import './Stylings/InputStylings.css'

function EmailInput({ email ,setEmail }) {
    return (
        <div className="form-content">
            <input 
                className='input-container email' 
                type="email" 
                placeholder="Alamat Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
            </input>
        </div>
    )
}

export default EmailInput