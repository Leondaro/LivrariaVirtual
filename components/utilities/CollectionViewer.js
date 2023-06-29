import { useBooks } from "../../hooks/useBooks";
import { useFilter } from "../../hooks/useFilter";
import { getPageNumberURL } from "../../utils/getParamsURL";
import { useEffect } from "react";


const CollectionViewer = ({ children }) => {
    const { updateBooks } = useBooks();
    const { filter, updateFilter } = useFilter();
    
    useEffect(() => {
        (async () => {
            await handlePrimaryQuery();
        })();
    }, []);

    const handlePrimaryQuery = () => {
        const pageIdURL = getPageNumberURL();
        const storagedFilter = localStorage.getItem('query-filter')
        
        if (storagedFilter) updateFilter(storagedFilter);
        updateBooks({ 
            queryFilter: storagedFilter ? storagedFilter : filter, 
            pageIndex: pageIdURL > -1 && (pageIdURL-1),
        });
    }

    return <>{children}</>;
}

export default CollectionViewer;