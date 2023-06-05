import { SectionTitle, CardPlaceholder, Pagination, AsideMenu } from "../../../components";
import Layout from "../layout";


function Acervo() {
    const cols = [0, 1, 2, 3]
    
    return (
        <Layout name={"Acervo"}>
            <div className="breakpoint-wrapper">
                <AsideMenu />
                <div className="home-columns">
                    <div className="column is-narrow pt-0">
                        <div className="box">
                            <SectionTitle><span className="padding-title">Acervo</span></SectionTitle>
                            <div className="card-columns">
                                {cols.map(col => {
                                    return (
                                        <CardPlaceholder key={col} />
                                    )
                                })}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Acervo;