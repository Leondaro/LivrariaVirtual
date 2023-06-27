import api from "./api";

export const getBooks = async (queryFilter, pageIndex) => {
    try {
        return await api.get('/clients', { params: {queryFilter, pageIndex} });
    } catch (error) {
        console.log(error);
    }
}