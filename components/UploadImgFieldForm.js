const UploadImgFieldForm = ({ label, inputName, typeImages, value, handleChange }) => {
    return (
        <>
            <div className="field mb-5">
                <label className="label has-text-white">{label}</label>
                <div className="file has-name is-fullwidth">
                    <label className="file-label">
                        <input className="is-hidden" type="file" name={inputName} value={value} 
                        accept={typeImages} onChange={handleChange} />
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fa fa-upload"></i>
                            </span>
                            <span className="file-label">
                                Anexar imagem…
                            </span>
                        </span>
                        <input className="file-name" defaultValue="" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default UploadImgFieldForm;