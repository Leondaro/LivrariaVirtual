const SectionTitle = ({ title }) => {
    return (
        <>
            <div className="box is-shadowless is-radiusless is-marginless">
                <h2 className="title is-3 has-text-info">{title}</h2>
            </div>
        </>
    );
}

export default SectionTitle;