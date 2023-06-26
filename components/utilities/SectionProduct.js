import calcDiscount from "../../helpers/CalcDiscount";
import priceFormat from "../../helpers/PriceFormat";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Board, BoardSection, CartButton } from "..";
import { Generic, Column, Level, Title, Image } from "rbx";
import Img from "next/image";


const SectionProduct = () => {
    const { value } = useLocalStorage('book', '');

    return (
        <>
            <Column className="full-centered">
                <Image.Container>
                    <Img src={`/upload/products/${value.capa}`} width={256} height={640} alt="Foto do livro" />
                </Image.Container>
            </Column>
            <Column className="max-width full-centered">
                <Level>
                    <Board>
                        <BoardSection>
                            <Level>
                                <Level.Item  align={"left"}>
                                    <Column>
                                        <Title size={5} textColor="white" marginless={true}>{value.titulo}</Title>
                                        <Title subtitle={true} size={6} textColor="white" marginless={true}>{value.autor}</Title>
                                    </Column>
                                </Level.Item>
                                <Level.Item  align={"right"}>
                                    <Column>
                                        <Title size={value.desconto > 0 ? 5 : 4} className={value.desconto > 0 && "scratched"} textColor="white" marginless={true}>
                                            R$ {priceFormat(value.preco)}
                                        </Title>
                                        {value.desconto > 0 && <Title subtitle={true} size={4} textColor="white" marginless={true}>R$ {priceFormat(calcDiscount(value.desconto, value.preco))}</Title>}
                                    </Column>
                                </Level.Item>
                            </Level>
                        </BoardSection>
                        <BoardSection>
                            <Generic as="p" textColor="white" marginless={true}>{value.descricao}</Generic>
                        </BoardSection>
                        <BoardSection>
                            <Column className="full-centered">
                                <CartButton target={value}/>
                            </Column>
                        </BoardSection>
                    </Board>
                </Level>
            </Column>
        </>
    );
}

export default SectionProduct;