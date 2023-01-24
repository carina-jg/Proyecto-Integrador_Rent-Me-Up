import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/DetallesProducto.css";
import Text from "./atoms/Text";
import { Titulo } from "../styles/CalendarioReservaStyle";
import Arrow from "../assets/arrow.svg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalendarioReservas from "./molecules/CalendarioReservas";
import ImageGallery from "./molecules/ImageGallery";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/Products";
import Button from "./atoms/Button";
import {
    ContenedorBoton,
    SeccionReserva,
} from "../styles/CalendarioReservaStyle";
import { UserContext } from "../services/UserContext";

function DetallesProducto() {
    const { id } = useParams();
    const { dataProduct, setDataProduct,setIdProduct } = useContext(UserContext);
    const [images, setImages] = useState([{ source: "", caption: "image" }]);
    const [fechasOcupadas, setFechasOcupadas] = useState([]);
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    // funcion para obtener los detalles de un solo producto por su id

    const getProd = async () => {
        const resp = await getProductById(id);
        setDataProduct(resp);
        const imageLength = resp.images.length;
        let img = resp.images.map((item, index) => {
            return {
                src: item.url,
                thumbnail: item.url,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                title: index + 1 + "/" + imageLength,
            };
        });
        setImages(img);

        let dates = resp.bookings.map((item) => {
            return {
                checkIn: item.checkInDate,
                checkOut: item.checkOutDate,
            };
        });
        setFechasOcupadas(dates);
    };

    useEffect(() => {
        getProd();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const clickReserva = () => {
        if(token !== null) {
            //poner en nulo el id del context nuevo
            navigate(`/products/${id}/reservation`)
        } else {
            //crear un nuevo context y guardar el id
            setIdProduct(id)
            navigate("/sign-in")
        }
    }

    return (
        <div style={{ width: "100%" }}>
            {/* Bloque Header */}
            <header className="BloqueHeader">
                <div className="CategoriaDelProducto">
                    <Text
                        type="h4"
                        color="black"
                        text={dataProduct?.category?.title}
                    />
                </div>
                <div className="TituloDelProducto">
                    <Text type="h1" color="black" text={dataProduct.title} />
                </div>
                <div>
                    <Link to={"/"}>
                        <img className="arrow" src={Arrow} alt="arrow" />
                    </Link>
                </div>
            </header>

                <div>
                    {/* Bloque Ubicacion */}

                    <div className="BloqueUbicacion">
                        <div className="DatosUbi">
                            <Text
                                type="p1"
                                color="secondary"
                                text={`${dataProduct?.city?.name}, ${dataProduct?.city?.country?.name}`}
                            />
                        </div>
                        <FmdGoodIcon fontSize="small" className="Ubi" />
                        <div className="Distancia">
                            <Text
                                type="p1"
                                color="secondary"
                                text={dataProduct.address}
                            />
                        </div>
                    </div>

                    {/* Compartir Favoritos */}

                    <div className="IconComp">
                        <ShareIcon />
                    </div>
                    <div className="IconFav">
                        <FavoriteBorderIcon />
                    </div>

                    {/* Carrusel */}
                    <div className="carrusel">
                        <ImageGallery images={images} />
                    </div>

                    {/* Bloque Descripcion */}

                    <div className="BloqueDescripcion">
                        <Text
                            type="h1"
                            color="secondary"
                            text={`Alójate en el corazón de ${dataProduct?.city?.name}`}
                        />
                        <div className="TextoDeDescripcion">
                            <Text type="p1" text={dataProduct.description} />
                        </div>
                    </div>

                    {/* Bloque Caracteristicas */}

                    <div className="TituloC">
                        <Text
                            type="h1"
                            color="secondary"
                            text="¿Qué ofrece este lugar?"
                        />
                    </div>
                    <div className="BloqueDeCaracteristicas">
                        <div className="caracteristicas">
                            <ul
                                className="listaCaracteristicas"
                                style={{ paddingLeft: "30px" }}
                            >
                                {dataProduct?.characteristicsXProducts?.map(
                                    (item) => (
                                        <li
                                            className="itemCaracteristica"
                                            key={item.id}
                                        >
                                            <span className="iconosC">
                                                <img
                                                    src={
                                                        item?.characteristic
                                                            ?.icon
                                                    }
                                                    alt=""
                                                />
                                            </span>
                                            {item?.characteristic?.description}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Bloque Calendario */}

                    <SeccionReserva>
                        <Titulo>
                            <Text
                                type="h1"
                                color="secondary"
                                text="Fechas disponibles"
                            />
                        </Titulo>

                        <CalendarioReservas fechasOcupadas={fechasOcupadas} />
                        <ContenedorBoton>
                            <Text
                                type="h3"
                                color="black"
                                text="Agrega tus fechas de viaje para obtener precios exactos"
                            />
                            <Button
                                text="Iniciar reserva"
                                fullwidth
                                click={clickReserva}
                            />
                        </ContenedorBoton>
                    </SeccionReserva>
                </div>

            {/* Bloque de Politicas */}

            <div className="TituloP">
                <Text type="h1" color="secondary" text="Qué tienes que saber" />
            </div>

            <div className="BloqueDePoliticas">
                <div>
                    <div className="politicas">
                    <Text
                        type="h3"
                        color="secondary"
                        text="Normas de la casa"
                    />
                    </div>
                    <ul>
                        {dataProduct?.policiesXProducts
                            ?.filter(
                                (item) =>
                                    item?.policy?.policyType?.name ===
                                    "Normas de la casa"
                            )
                            .map((item) => (
                                <li className="listaPoliticas" key={item.id}>
                                    {item?.policy?.description}
                                </li>
                            ))}
                    </ul>
                </div>
                <div>
                    <div className="politicas">
                    <Text
                        type="h3"
                        color="secondary"
                        text="Política de cancelación"
                    />
                    </div>
                    
                    <ul>
                        {dataProduct?.policiesXProducts
                            ?.filter(
                                (item) =>
                                    item?.policy?.policyType?.name ===
                                    "Política de cancelación"
                            )
                            .map((item) => (
                                <li className="listaPoliticas" key={item.id}>
                                    {item?.policy?.description}
                                </li>
                            ))}
                    </ul>
                </div>
                <div>
                    <div>
                    <Text className="politicas"
                        type="h3"
                        color="secondary"
                        text="Salud y seguridad"
                    />
                    </div>
                    <ul>
                        {dataProduct?.policiesXProducts
                            ?.filter(
                                (item) =>
                                    item?.policy?.policyType?.name ===
                                    "Salud y seguridad"
                            )
                            .map((item) => (
                                <li className="listaPoliticas" key={item.id}>
                                    {item?.policy?.description}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default DetallesProducto;
