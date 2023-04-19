const CardHeader = ({autor, titulo}) => {
    return (
        <>
            <div className="card-title">
                <a href="#" className="title is-5 has-text-white"> {titulo} </a><br />
                <p className="subtitle is-6 has-text-white"> {autor} </p>
            </div>
        </>
    );
}

export default CardHeader;