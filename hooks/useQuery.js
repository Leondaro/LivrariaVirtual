import { getBooks } from "../services/getBooks"

export function useQuery() {
    const findBooks = async (filter) => {
        return await getBooks(filter);
    }
    
    return { findBooks }    
}