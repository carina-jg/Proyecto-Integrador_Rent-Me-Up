import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getProducts = async ({setProducts}) => {
    try {const resp = await api.get('/products');
    setProducts(resp.data);}
    catch(e) {
      // console.log(e);
    }
  }

export const getProductById = async (productId) => {
  const resp = await api.get(`/products/${productId}`);

  return resp.data;
}

export const getProductsRandom = async ({setProductsRandom}) => {
  const resp = await api.get('/products');
  setProductsRandom(resp.data);
}

export const getProductByCityOrDates = async ({cityApi, startDateApi, endDateApi}) => {
  const resp = await api.get(`/products/city-dates?city_id=${cityApi}&checkInDate=${startDateApi}&checkOutDate=${endDateApi}`);

  return resp.data;
}


