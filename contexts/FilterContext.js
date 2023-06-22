import { createContext, useState, useEffect } from "react";
import { filterList } from "../types/filterList";
//import { useLocalStorage } from "../hooks/useLocalStorage";

export const FilterContext = createContext();

export function FilterContextProvider({ children }){
    const [type, setType] = useState(filterList[0]);
    //const { value } = useLocalStorage('filterByCategory', '');
    /*
    useEffect(() => {
        if (value !== '') setType(value);
    }, [value]);
    */
    const changeType = (value) => {
        setType(value);
    }

    return(
        <FilterContext.Provider value={{type, changeType}}>
            {children}
        </FilterContext.Provider>
    )
};