const CardContent = ({ children }) => {
    return (
        <div className="card-content">
            <div className="media-content">
                {children}
            </div>
        </div>
    )
}

export default CardContent;