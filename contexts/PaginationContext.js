import { createContext, useEffect, useState } from "react";
import { getPageNumberURL } from "../utils/getParamsURL";

export const PaginationContext = createContext();

export function PaginationContextProvider({children}) {
    const [ currentPage, setCurrentPage ] = useState(1);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const page = getPageNumberURL();
        setCurrentPage(page > -1 && (page));
    }, []);

    const updatePage = (page) => {
        setCurrentPage(page);
    }
    
    return (
        <PaginationContext.Provider value={{ currentPage, updatePage }}>
            {children}
        </PaginationContext.Provider>
    )
}