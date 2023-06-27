import { createContext, useState } from "react";
import { useQuery } from "../hooks/useQuery";

export const BookContext = createContext();

export function BookContextProvider({children}) {
    const [books, setBooks] = useState([]);
    const [amountPages, setAmountPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const { findBooks } = useQuery();
    
    const updateBooks = async (filterValue, pageValue) => {
        if (isLoading) return;

        setIsLoading(true);
        const { data } = await findBooks(filterValue, pageValue);
        await setBooks(data.docs);
        await setAmountPages(data.pages);
        setIsLoading(false);
    }
    
    return(
        <BookContext.Provider value={{ books, isLoading, amountPages, updateBooks }}>
            {children}
        </BookContext.Provider>
    )
}