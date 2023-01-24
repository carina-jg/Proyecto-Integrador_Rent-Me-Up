import React, { useEffect, useState } from "react";
import { getProducts } from "../services/Products";
import Card from "./Card";

function ListaBooking({ idCat, tipoProd, dataFilterProd, recommendationPage }) {
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const numberOfRecommendations = 10;
  let productosFiltrados = products.filter(
    (prod) => prod.category.id === idCat
  );

  useEffect(() => {
    getProducts({ setProducts });
  }, []);

  useEffect(() => {
    setRecommendedProducts(
      products.slice(0, numberOfRecommendations * recommendationPage)
    );
  }, [products, recommendationPage]);

  const tipoProdRenderizar = (tipo) => {
    if (tipo === "productosFiltrados") {
      return productosFiltrados;
    } else if (tipo === "productsRandom") {
      return recommendedProducts;
    } else if (tipo === "productsDateCity") {
      return dataFilterProd;
    }
  };

  return (
    <>
      {tipoProdRenderizar(tipoProd).map((product) => (
        <Card
          key={product.id}
          mainPictureUrl={product.mainPictureUrl}
          category={product.category.title}
          title={product.title}
          address={product.address}
          description={product.description}
          id={product.id}
        />
      ))}
    </>
  );
}

export default ListaBooking;
