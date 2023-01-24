import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getCities = async ({setCities}) => {
    const resp = await api.get('/cities');
    setCities(resp.data);
  }

// funcion para agregar ciudades

// funcion para eliminar ciudad

// funcion para actualizar ciudad