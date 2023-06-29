import { useEffect } from "react";
import { useBooks } from "../../hooks/useBooks";

const HomeViewer = ({ children }) => {
    const { updateBooks } = useBooks();
    const sortParams = { sortBy: "", sortValue: '' };

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