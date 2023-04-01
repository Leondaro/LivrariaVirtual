const TextFieldForm = ({label, placeholder, value, handleChange}) => {
    return (
        <>
            <div className="field mb-5">
                <label className="label has-text-white">{label}</label>
                <div className="control">
                    <textarea className="textarea" placeholder={placeholder} 
                    value={value} onChange={handleChange}></textarea>
                </div>
            </div>
        </>
    )
}

export default TextFieldForm;