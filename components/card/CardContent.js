import { Media, Card } from "rbx";

const CardContent = ({ children }) => {
    return (
        <Card.Content>
            <Media.Item>
                {children}
            </Media.Item>
        </Card.Content>
    )
}

export default CardContent;