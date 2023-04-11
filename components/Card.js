import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";

const Card = ({urlImage, autor, titulo, preco, precoDesconto}) => {
    return (
        <>
            <div className="column box-card">
                <div className="card">
                    <CardImage urlImage={urlImage} />
                    <div className="card-content">
                        <div className="media-content">
                            <CardHeader autor={autor} titulo={titulo} />
                            <CardContent preco={"R$ "+preco} precoDesconto={"R$ "+precoDesconto} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;