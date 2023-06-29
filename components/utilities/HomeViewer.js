import { useEffect } from "react";
import { useBooks } from "../../hooks/useBooks";

const HomeViewer = ({ children }) => {
    const { updateBooks } = useBooks();
    const sortParams = { sortBy: "vendas", sortValue: -1 };

    useEffect(() => {
        (async () => {
            await handlePrimaryQuery();
        })();
    }, [])

    const handlePrimaryQuery = () => {
        updateBooks(sortParams);
    }

    return <>{children}</>;
}

export default HomeViewer;