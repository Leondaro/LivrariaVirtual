import Card from "./Card";

const CollectionCards = ({ items }) => {
    const cols = [
        [1, 2, 3, 4]
    ]
    
    const row = () => 
        <div className="columns">{cols.map((col) => 
            <>
                <Card key={items._id} 
                    urlImage={items.capa}
                    titulo={items.titulo}
                    autor={items.autor}
                    preco={items.preco}
                    precoDesconto={"precoDesconto"}
                />
            </>
            )}
        </div>

    return <>{row}</>
    /*
    return (<> 
                {.map((col) =>
                    <Card key={items._id}
                        urlImage={items.capa}
                        titulo={items.titulo}
                        autor={items.autor}
                        preco={items.preco}
                        precoDesconto={"precoDesconto"}
                    />
                )}
         
    </>)
    */
}

export default CollectionCards;