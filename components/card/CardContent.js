const CardContent = ({preco, precoDesconto}) => {
    return (
        <>
            <div className="content">
                <p className="title is-6 is-marginless has-text-white is-scratched"> {preco} </p>
                <p className="title is-4 has-text-white"> {precoDesconto} </p>
                <div className="level is-mobile">
                    <div className="level-left">
                        <a className="button is-warning">Detalhes</a>
                    </div>
                    <div className="level-right ml-4">
                        <a className="button is-success">
                            <span className="icon is-small">
                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                            </span>
                            <span>Carrinho</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardContent;