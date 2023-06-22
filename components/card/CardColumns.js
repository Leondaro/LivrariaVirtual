import { useEffect } from "react"
import { useBooks } from "../../hooks/useBooks"
import { Generic, Column } from "rbx"
import Cardboard from "./Cardboard"

const CardColumns = ({ children }) => {
    const { books, updateBooks } = useBooks();
    const placeholders = [0, 1, 2, 3]

    useEffect(() => {
        (async () => {
            await updateBooks();
        })();
    }, []);

    return (
        <Generic className="card-columns">
            {(() => {
                if (books.length > 0) {
                    return <><Cardboard /></>
                } else return (
                    <>
                        {placeholders.map(placeholder => {
                            return (
                                <Column key={placeholder}>
                                    {children}
                                </Column>
                            )
                        })}
                    </>
                )
            })()}
        </Generic>
    )
}

export default CardColumns;