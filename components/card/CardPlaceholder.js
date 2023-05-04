const CardPlaceholder = () => {
    return (
        <>
            <div className="column box-card">
                <div className="card">
                    <div className="card-image pt-3">
                        <div className="level-item">
                            <div className="placeholder-image placeholder-color"></div>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <div className="card-title">
                                <p className="placeholder-title placeholder-color"></p>
                                <p className="placeholder-subtitle placeholder-color"></p>
                            </div>
                            <div className="content">
                                <p className="placeholder-price placeholder-color"></p>
                                <p className="placeholder-discount placeholder-color"></p>
                                <div className="level is-mobile">
                                    <div className="level-left">
                                        <p className="placeholder-button placeholder-color"></p>
                                    </div>
                                    <div className="level-right ml-4">
                                        <p className="placeholder-button placeholder-color"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardPlaceholder;