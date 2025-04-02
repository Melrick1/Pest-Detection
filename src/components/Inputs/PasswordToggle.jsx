function PasswordToggle({ isVisible, onToggle }) {
    return (
        <span>
            <i className={`bi bi-eye${isVisible ? "-slash" : ""}`}
            onClick={onToggle}></i>
        </span>
    );
}

export default PasswordToggle;