import { createContext, useState, useEffect } from "react";
import { filterList } from "../utils/filterList";

export const FilterContext = createContext();

export function FilterContextProvider({ children }){
    const [type, setType] = useState(filterList[0]);

    const changeType = (value) => {
        setType(value);
    }

    return(
        <FilterContext.Provider value={{type, changeType}}>
            {children}
        </FilterContext.Provider>
    )
};