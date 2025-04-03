import { useState } from "react";

function InputPassword({ password, setPassword }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="form-content">
            <input 
                className='input-container pass' 
                type={showPassword ? "text" : "password"}  
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
            <span>
                <i className={`bi bi-eye${showPassword ? "-slash" : ""}`}
                onClick={handleTogglePassword}></i>
            </span>
        </div>
    )
}

export default InputPassword;