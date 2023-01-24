import React from "react";
import Buscador from "../../components/molecules/Buscador";
import ListaBooking from "../../components/ListaBooking";
import ListaCategorias from "../../components/ListaCategorias";
import {
  ContenedorBooking,
  ContenedorCategorias,
  GridBooking,
  GridCategorias,
} from "../../styles/MainStyle";
import Text from "../../components/atoms/Text";
import { useState } from "react";
import Button from "../../components/atoms/Button";

function Home() {
  const [categoryData, setCategoryData] = useState([]);
  const [clickCat, setClickCat] = useState(false);
  const [titleCat, setTitleCat] = useState("");
  const [clickProd, setClickProd] = useState(false);
  const [idCat, setIdCat] = useState("");
  const [dataFilterProd, setDataFilterProd] = useState([]);
  const [recommendationPage, setRecommendationPage] = useState(1);

  const renderizarProdCat = () => {
    if (clickCat) {
      return (
        <ContenedorBooking>
          <Text type="h1" color="black" text={titleCat} />
          <GridBooking>
            <ListaBooking
              idCat={idCat}
              tipoProd={"productosFiltrados"}
              dataFilterProd={dataFilterProd}
            />
          </GridBooking>
        </ContenedorBooking>
      );
    }
  };

  const renderizarProdFiltrados = () => {
    if (clickProd) {
      return (
        <ContenedorBooking>
          <Text type="h1" color="black" text="Resultados de la búsqueda" />
          <GridBooking>
            <ListaBooking
              tipoProd="productsDateCity"
              dataFilterProd={dataFilterProd}
            />
          </GridBooking>
        </ContenedorBooking>
      );
    }
  };

  return (
    <>
      <Buscador
        clickProd={clickProd}
        setClickProd={setClickProd}
        setDataFilterProd={setDataFilterProd}
      />
      <ContenedorCategorias>
        <Text
          type="h1"
          color="secondary"
          text="Buscar por tipo de alojamiento"
        />
        <GridCategorias>
          <ListaCategorias
            categoryData={categoryData}
            setCategoryData={setCategoryData}
            clickCat={clickCat}
            setClickCat={setClickCat}
            setTitleCat={setTitleCat}
            setIdCat={setIdCat}
          />
        </GridCategorias>
      </ContenedorCategorias>
      {renderizarProdCat()}
      {renderizarProdFiltrados()}
      <ContenedorBooking>
        <Text type="h1" color="black" text="Recomendaciones" />
        <GridBooking>
          <ListaBooking tipoProd="productsRandom" recommendationPage={recommendationPage} />
        </GridBooking>
        <Button
            style={{marginTop: "20px"}}
            type="Outline"
            text="Ver más recomendaciones"
            
            click={() => setRecommendationPage(recommendationPage + 1)}
          />
      </ContenedorBooking>
      ;
    </>
  );
}

export default Home;
