import Link from "next/link";
import Text from "../utilities/Text";

function Footer() {
    return (
        <footer className="footer is-framed-top-burgundy">
            <div className="content has-text-centered">
                <div className="mb-3">
                    <strong><Text css={"has-text-white"}>Este é um projeto demosntrativo.</Text></strong>
                </div>
                <div className="columns level-item is-mobile">
                    <div className="column is-narrow">
                        <Link href={"https://conatto.github.io"}>
                            <strong className="has-text-success">Saiba Mais</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;