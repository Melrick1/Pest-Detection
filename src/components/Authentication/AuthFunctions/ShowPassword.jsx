import { useState } from 'react';

const usePasswordToggle = () => {
    //Password Toggles
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleTogglePassword1 = () => {
        setShowPassword1(!showPassword1);
    };

    const handleTogglePassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    return {
        showPassword1,
        showPassword2,
        handleTogglePassword1,
        handleTogglePassword2,
    };
};

export default usePasswordToggle;