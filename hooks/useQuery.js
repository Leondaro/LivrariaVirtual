import { getBooks } from "../services/getBooks"

export function useQuery() {
    const findBooks = async (params) => {
        return await getBooks(params);
    }
    
    return { findBooks }    
}