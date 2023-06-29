import { createContext, useState, useEffect } from "react";
import { filterList } from "../utils/filterList";

export const FilterContext = createContext();

export function FilterContextProvider({ children }){
    const [filter, setFilter] = useState(filterList[0]);

    const updateFilter = (value) => {
        setFilter(value);
        localStorage.setItem('query-filter', value)
    }

    return(
        <FilterContext.Provider value={{ filter, updateFilter }}>
            {children}
        </FilterContext.Provider>
    )
};