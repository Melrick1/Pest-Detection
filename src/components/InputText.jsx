import "./Stylings/InputStylings.css"

function InputText({ type, value, setValue }) {
    return (
        <div className="form-content">
            <input
                className='input-container email'
                type={type}
                placeholder="Nama pengguna"
                value={value}
                onChange={(e) => setValue(e.target.value)}>
            </input>
        </div>
    )
}

export default InputText;