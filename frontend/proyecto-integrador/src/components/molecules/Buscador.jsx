import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    BuscadorStyle,
    Titulo,
    Formulario,
    Section,
    ContainerCalendar,
    Contenedor,
    InputStyle,
    Div,
} from "../../styles/BuscadorStyle";
import Button from "../atoms/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import Calendar from "react-calendar";
import Select from "react-select";
import dayjs from "dayjs"; // ES 2015
import { getCities } from "../../services/Cities";
import { getProductByCityOrDates } from "../../services/Products";

// import { click } from "@testing-library/user-event/dist/click";

function Buscador({ setDataFilterProd, setClickProd }) {
    const LocationOnIconStyle = styled(LocationOnIcon)`
        color: ${({ theme }) => theme.tertiary};
    `;

    const CalendarStyle = styled(Calendar)`
        background-color: ${({ theme }) => theme.white};
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .react-select__control {
            border: none;
        }
    `;

    const SelectStyle = styled(Select)`
        width: 100%;

        .css-1s2u09g-control {
            border: none;
            text-align: left;
        }
    `;

    const EventIconStyle = styled(EventIcon)`
        color: ${({ theme }) => theme.tertiary};
    `;

    const formatDate = (date) => {
        return dayjs(date).format("DD-MM-YYYY");
    };

    const formatDateApi = (date) => {
        return dayjs(date).format("YYYY-MM-DD");
    };

    const [dateValue, setDateValue] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [cities, setCities] = useState([]);
    const [tablet, setTablet] = useState(false);
    const [cityValue, setCityValue] = useState("");
    const [conFecha, setConFecha] = useState(true);
    const [visible, setVisible] = useState(true);

    //const [dataApiProducts, setDataApiProducts] = useState([]);

    const optionsCity = cities.map((city) => ({
        label: city.name,
        value: city.id,
    }));

    const minDate = new Date();
    const startDateVar = () => {
        if (conFecha === false) {
            return "";
        }
        return formatDateApi(dateValue[0]).toString();
    };

    const endDateVar = () => {
        if (conFecha === false) {
            return "";
        }
        return formatDateApi(dateValue[1]).toString();
    };

    useEffect(() => {
        try{
            getCities({ setCities })
        } catch (error) {
            console.error(error)
        }
        
    }, []);

    useEffect(() => {
        const responsive = () =>
            window.innerWidth >= 768 ? setTablet(true) : setTablet(false);
        responsive();
        window.addEventListener("resize", () => responsive());
    }, []);

    const sinFechaDecidida = () => {
        setConFecha(!conFecha);
        setVisible(!visible);
    };

    const handleSelectChange = (event) => {
        setCityValue(event);
    };

    let ciudadONull = () => {
        if(cityValue===null || cityValue===undefined || cityValue===""){
            return "";
        } else {
            return cityValue.value;
        }
    }

    ciudadONull()

    let cityApi = ciudadONull();
    let startDateApi = startDateVar();
    let endDateApi = endDateVar();

    // LLAMADO API GET
    const getProdApi = async () => {
        const resp = await getProductByCityOrDates({
            cityApi,
            startDateApi,
            endDateApi,
        });
        //setDataApiProducts(resp);
        setDataFilterProd(resp);
    };

    useEffect(() => {}, [cityApi, startDateApi, endDateApi]);
    
    const enviarDatos = (event) => {
        event.preventDefault();
        getProdApi();
        setClickProd(true);
    };

    const mostrarFecha = (fecha) => {
        if (visible === false) {
            return "";
        } else {
            return fecha;
        }
    };

    return (
        <BuscadorStyle>
            <Titulo>Busca ofertas en hoteles, casas y mucho más</Titulo>

            <Formulario
                onSubmit={enviarDatos}
                id="enviarElementosGet"
                style={{ width: "100%" }}
            >
                {/* <Formulario> */}
                <Section columnStar={1} columnEnd={2} rowStart={1} rowEnd={1}>
                    <LocationOnIconStyle />
                    <SelectStyle
                        defaultInputValue=""
                        value={cityValue}
                        onChange={handleSelectChange}
                        options={optionsCity}
                        placeholder="¿A donde vamos?"
                        isClearable={true}
                    />
                </Section>

                <Section
                    columnStar={2}
                    columnEnd={3}
                    rowStart={1}
                    rowEnd={1}
                    onClick={() =>
                        conFecha === true
                            ? setShowCalendar(!showCalendar)
                            : setShowCalendar(false)
                    }
                >
                    <EventIconStyle />
                    <label htmlFor="startDate" disabled={true}>
                        Ida
                    </label>
                    <InputStyle
                        type="text"
                        name="startDate"
                        value={mostrarFecha(formatDate(dateValue[0]))}
                        onChange={(value) => setDateValue(value)}
                        readOnly
                    />
                </Section>

                <Section
                    columnStar={3}
                    columnEnd={4}
                    rowStart={1}
                    rowEnd={1}
                    onClick={() =>
                        conFecha === true
                            ? setShowCalendar(!showCalendar)
                            : setShowCalendar(false)
                    }
                >
                    <EventIconStyle />
                    <label htmlFor="endDate">Vuelta</label>
                    <InputStyle
                        type="text"
                        name="endDate"
                        value={mostrarFecha(formatDate(dateValue[1]))}
                        onChange={(value) => setDateValue(value)}
                        readOnly
                    />
                </Section>
                <Div columnStar={2} columnEnd={4} rowStart={2} rowEnd={3}>
                    <input
                        type="checkbox"
                        id="buscarFecha"
                        value={conFecha}
                        onChange={sinFechaDecidida}
                    />
                    <label htmlFor="buscarFecha">
                        Aún no he decidido mis fechas
                    </label>
                </Div>

                <Contenedor
                    showCalendar={showCalendar}
                    setShowCalendar={setShowCalendar}
                >
                    <ContainerCalendar>
                        {tablet ? (
                            <CalendarStyle
                                showDoubleView={true}
                                selectRange={true}
                                minDate={minDate}
                                onChange={(value) => setDateValue(value)}
                                value={dateValue}
                            />
                        ) : (
                            <CalendarStyle
                                showDoubleView={false}
                                selectRange={true}
                                minDate={minDate}
                                onChange={(value) => setDateValue(value)}
                                value={dateValue}
                            />
                        )}
                    </ContainerCalendar>
                    <Button
                        text="Seleccionar fecha"
                        click={() => setShowCalendar(!showCalendar)}
                        fullwidth
                    />
                </Contenedor>
                <Button
                    columnStar={4}
                    columnEnd={5}
                    rowStart={1}
                    rowEnd={1}
                    text="Buscar"
                    type="submit"
                    value="Submit"
                    form="enviarElementosGet"
                    fullwidth
                />
            </Formulario>
            {/* </form> */}
        </BuscadorStyle>
    );
}

export default Buscador;
