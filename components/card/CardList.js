import { useEffect } from "react"
import { getPageNumberURL } from "../../utils/getParamsURL"
import { useBooks } from "../../hooks/useBooks"
import { useFilter } from "../../hooks/useFilter"
import { Generic, Column } from "rbx"
import Cardboard from "./Cardboard"

const CardList = ({ children }) => {
    const { books, updateBooks } = useBooks();
    const { type } = useFilter();
    const placeholders = [0, 1, 2, 3]

    useEffect(() => {
        (async () => {
            const pageIndex = getPageNumberURL();
            await updateBooks({ queryFilter: type, pageIndex: pageIndex > -1 && (pageIndex-1) });
        })();
    }, []);

    return (
        <Generic className="card-columns">
            {(() => {
                if (books?.length > 0) {
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

export default CardList;