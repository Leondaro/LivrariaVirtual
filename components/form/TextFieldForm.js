const TextFieldForm = ({label, inputName, placeholder, value, handleChange}) => {
    return (
        <>
            <div className="field mb-5">
                <label className="label has-text-white">{label}</label>
                <div className="control">
                    <textarea className="textarea" name={inputName} placeholder={placeholder} 
                    value={value || ""} onChange={handleChange}></textarea>
                </div>
            </div>
        </>
    )
}

export default TextFieldForm;