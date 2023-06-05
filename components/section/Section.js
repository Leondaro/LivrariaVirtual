const Section = ({ children }) => {
    return (
            <section className="section translucid-grey border-top-burgundy border-bottom-burgundy">
                <div className="level justify-content">
                    {children}
                </div>
            </section >
    )
}

export default Section;