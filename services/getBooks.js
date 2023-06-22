import api from "./api";

export const getBooks = async (queryFilter) => {
    try {
        return await api.get('/clients', { params: {queryFilter} })
    } catch (error) {
        console.log(error);
    }
}