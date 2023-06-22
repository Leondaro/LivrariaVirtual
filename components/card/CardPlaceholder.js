import { Generic, Card, Column, Block, Level, Media, Title } from "rbx";

const CardPlaceholder = () => {
    return (
        <Generic className="box-card">
            <Card className="card-size">
                <Card.Image>
                    <Level.Item>
                        <Generic className="placeholder-image placeholder-color"></Generic>
                    </Level.Item>
                </Card.Image>
                <Card.Content>
                    <Media.Item>
                        <Block className="placeholder-header-size">
                            <Generic className="placeholder-item placeholder-color"></Generic>
                            <Generic className="placeholder-item placeholder-color"></Generic>
                        </Block>
                        <Block>
                            <Column paddingless={true} size={4}>
                                <Generic className="placeholder-item placeholder-color"></Generic>
                            </Column>
                            <Column paddingless={true} size={5}>
                                <Generic className="placeholder-item placeholder-color"></Generic>
                            </Column>
                        </Block>
                        <Column.Group>
                            <Column paddingless={true} size={6}>
                                <Level.Item>
                                    <Column paddingless={true} size={8}>
                                        <Generic className="placeholder-item placeholder-color"></Generic>
                                    </Column>
                                </Level.Item>
                            </Column>
                            <Column paddingless={true} size={6}>
                                <Level.Item>
                                    <Column paddingless={true} size={8}>
                                        <Generic className="placeholder-item placeholder-color"></Generic>
                                    </Column>
                                </Level.Item>
                            </Column>
                        </Column.Group>
                    </Media.Item>
                </Card.Content>
            </Card>
        </Generic>
        
    )
};

export default CardPlaceholder;