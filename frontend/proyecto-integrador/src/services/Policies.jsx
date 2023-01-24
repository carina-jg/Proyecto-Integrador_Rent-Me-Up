import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getPoliciesType = async ({setPoliciesTypes}) => {
    const resp = await api.get('/policies');
    setPoliciesTypes(resp.data);
  }