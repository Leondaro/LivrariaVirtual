import { createContext, useState } from "react";
import { useQuery } from "../hooks/useQuery";

export const BookContext = createContext();

export function BookContextProvider({children}) {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { findBooks } = useQuery();
    
    const updateBooks = async (filterValue) => {
        if (isLoading) return;

        setIsLoading(true);
        const { data } = await findBooks(filterValue);
        await setBooks(data);
        setIsLoading(false);
    }
    
    return(
        <BookContext.Provider value={{ books, isLoading, updateBooks }}>
            {children}
        </BookContext.Provider>
    )
}