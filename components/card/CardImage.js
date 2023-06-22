import { Card, Image } from "rbx";

const CardImage = ({ children }) => {
    return (
        <Card.Image>
            <Image.Container>
                {children}
            </Image.Container>
        </Card.Image>
    )
}

export default CardImage;