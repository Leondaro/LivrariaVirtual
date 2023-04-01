import Card from "./Card";

const CollectionCards = (query) => {
    let card = {
        urlImage: "_img\\livros_pop\\01.jpg",
        titulo: "Mais Esperto Que o Diabo", 
        autor: "Ele Mesmo",
        preco: "Muito Caro",
        precoDesconto: "Bom Desconto"
    }
    const dataCards = [
        [card, card, card],
    ]
    
    const rows = dataCards.map((row) => 
        <div className="columns">{row.map((card) => 
            <>
                <Card
                    urlImage={card.urlImage}
                    titulo={card.titulo}
                    autor={card.autor}
                    preco={card.preco}
                    precoDesconto={card.precoDesconto}
                />
            </>)}
        </div>
    )

    return <>{rows}</>
}

export default CollectionCards;