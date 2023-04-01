const CardImage = ({urlImage}) => {
    return (
        <>
            <div className="card-image pt-3">
                <figure className="level-item">
                    <img className="showcase-image" src={urlImage} alt="Placeholder image" />
                </figure>
            </div>
        </>
    )
}

export default CardImage;