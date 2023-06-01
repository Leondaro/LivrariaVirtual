function input ({ type, name, placeholder }) {
    return (
        <input className="input" type={type} name={name} /*placeholder={placeholder}*/ defaultValue="Visitante" readOnly />
    )
}

export default input;