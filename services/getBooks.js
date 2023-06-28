import api from "./api";

export const getBooks = async (paramsValues) => {
    try {
        return await api.get('/clients', { params: paramsValues });
    } catch (error) {
        console.log(error);
    }
}