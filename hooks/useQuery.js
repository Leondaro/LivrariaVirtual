import { getBooks } from "../services/getBooks"

export function useQuery() {
    const findBooks = async (filter, page) => {
        return await getBooks(filter, page);
    }
    
    return { findBooks }    
}