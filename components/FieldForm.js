const FieldForm = ({label, inputType, inputName, placeholder, maxLenght, icon, value, handleChange}) => {
    return (
        <>
            <div className="field mb-5">
                <label className="label has-text-white">{label}</label>
                <div className="control has-icons-left">
                    <input className="input" type={inputType} name={inputName}
                        placeholder={placeholder} maxLength={maxLenght} value={value || ""} 
                        onChange={handleChange} />
                    <span className="icon is-small is-left">
                        <i className={"fa fa-"+icon}></i>
                    </span>
                </div>
            </div>
        </>
    )
}

export default FieldForm;