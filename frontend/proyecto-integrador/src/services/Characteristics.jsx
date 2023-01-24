import { api } from "./api/api";

// funcion para obtener o lista de caracteristicas
export const getCharacteristics = async ({setCharacteristics}) => {
    const resp = await api.get('/characteristics');
    setCharacteristics(resp.data);
    // setDataCharacteristics(resp.data.characteristics)
  }


export const getCharacteristicsByProductId = async (productId) => {
    const resp = await api.get(`/product-characteristics/${productId}`);
    return resp.data 
} 