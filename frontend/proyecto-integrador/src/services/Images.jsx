import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getImages = async ({setImages}) => {
    const resp = await api.get('/images');
    setImages(resp.data);
  }