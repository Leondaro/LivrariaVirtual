const Section = ({ children }) => {
    return (
            <section className="section mt-7 mb-7 translucid-grey border-top-burgundy border-bottom-burgundy">
                <div className="level justify-content">
                    {children}
                </div>
            </section >
    )
}

export default Section;