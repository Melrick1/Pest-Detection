import "./Stylings/InputStylings.css"

function InputEmail({ email, setEmail }) {
  return (
    <div className="form-content">
        <input
            className='input-container text'
            type={'email'}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
        </input>
    </div>
  )
}

export default InputEmail