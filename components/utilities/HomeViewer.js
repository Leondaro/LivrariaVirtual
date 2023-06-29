import { useEffect } from "react";
import { useBooks } from "../../hooks/useBooks";

const HomeViewer = ({ children }) => {
    const { updateBooks } = useBooks();
    
    useEffect(() => {
        (async () => {
            await handlePrimaryQuery();
        })();
    }, [])

    const handlePrimaryQuery = () => {
        updateBooks();
    }

    return <>{children}</>;
}

export default HomeViewer;