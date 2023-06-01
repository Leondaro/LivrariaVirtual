const Card = ({children}) => {
    return (
        <div className="column box-card">
            <div className={"card"}>
                {children}
            </div>                                                            
        </div>
    )
}

export default Card;