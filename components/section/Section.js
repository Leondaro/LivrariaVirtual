const Section = ({ children }) => {
    return (
            <section className="section mt-7 mb-7 is-translucid-grey is-framed-top-burgundy is-framed-bottom-burgundy">
                <div className="level is-flex is-justify-content-center">
                    {children}
                </div>
            </section >
    )
}

export default Section;