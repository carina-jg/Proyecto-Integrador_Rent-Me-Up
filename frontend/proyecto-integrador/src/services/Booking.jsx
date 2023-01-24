import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getAllBookings = async (productId) => {
    const resp = await api.get(`/bookings/product/${productId}`);
    return resp.data;
};
