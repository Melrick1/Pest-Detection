import { useState } from "react";
import PasswordToggle from "./PasswordToggle";

function PasswordInput({ password, setPassword }) {
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
            <PasswordToggle isVisible={showPassword} onToggle={handleTogglePassword} />
        </div>
    )
}

export default PasswordInput