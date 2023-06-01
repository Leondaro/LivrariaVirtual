import Input from "./Input";

function InputField({ children, inputType, inputName, inputPlaceholder}) {
    return (
        <div className="block">
            <div className="field">
                <div className="control has-icons-left">
                    <Input type={inputType} name={inputName} placeholder={inputPlaceholder} />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InputField;