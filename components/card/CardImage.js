import Image from "next/image";
import Figure from "../utilities/Figure";

const CardImage = ({ urlImage }) => {
    return (
        <div className="card-image pt-3">
            <Figure css={"level-item"} >
                <Image src={"/upload/products/"+urlImage} width={171} height={240} alt="Foto da capa do livro" />
            </Figure>
        </div>
    )
}

export default CardImage;