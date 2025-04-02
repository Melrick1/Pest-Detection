function NameInput({ name, setName }) {
    return (
        <div className="form-content">
            <input
                className='input-container email'
                type="text"
                placeholder="Nama pengguna"
                value={name}
                onChange={(e) => setName(e.target.value)}>
            </input>
        </div>
    )
}

export default NameInput