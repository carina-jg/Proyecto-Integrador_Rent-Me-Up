import React, { useContext } from "react";
//import Text from "../atoms/Text";
import Calendar from "react-calendar";
import { ContainerCalendar } from "../../styles/CalendarioReservaStyle";
import { useState } from "react";
import { useEffect } from "react";
import { isWithinInterval } from "date-fns";
import { UserContext } from "../../services/UserContext";
//import { useParams } from "react-router-dom";
// import dayjs from "dayjs"; // ES 2015



function CalendarioReservas({ fechasOcupadas}) {
    const [tablet, setTablet] = useState(false);
    const { dateValue, setDateValue } = useContext(UserContext);
    const [enableRange, setEnableRange] = useState(true);
    const minDate = new Date();


    const stringToDate = (date) => {
        return new Date(date);
    };

    let rangoFechas = [];
    fechasOcupadas.map((reserva) => {
        let fechas = [];
        let ida = stringToDate(reserva.checkIn);
        let vuelta = stringToDate(reserva.checkOut);
        vuelta = stringToDate(vuelta.setDate(vuelta.getDate() + 1));

        fechas.push(ida);
        fechas.push(vuelta);

        return rangoFechas.push(fechas);
    });

    function isWithinRange(date, range) {
        return isWithinInterval(date, { start: range[0], end: range[1] });
    }

    function isWithinRanges(date, ranges) {
        return ranges.some((range) => isWithinRange(date, range));
    }



    function tileDisabled({ date, view }) {
        if (view === "month") {
            return isWithinRanges(date, rangoFechas);
        }
    }

    function validarFechaRango(inicio, fin, fecha) {
        if(inicio <= fecha && fecha <= fin) {
            return true;
        }
        return false;
    }

    function verificarRangoDentroDeOtroRango() {
        rangoFechas.forEach(reserva => {
            reserva.forEach(fecha => {
                if(validarFechaRango(dateValue[0], dateValue[1], fecha)){
                    setEnableRange(false);
                } else {
                    setEnableRange(true);
                }
            })
        })

        setEnableRange(true);
    }

    const onChangeRange = (value) => {
        setDateValue(value)
        verificarRangoDentroDeOtroRango()
    }

    useEffect(() => {
        const responsive = () =>
            window.innerWidth >= 768 ? setTablet(true) : setTablet(false);
        responsive();
        window.addEventListener("resize", () => responsive());
    }, []);

    return (
        <>
            <ContainerCalendar id="calendarCont2">
                {tablet ? (
                    <Calendar
                        showDoubleView={true}
                        selectRange={enableRange}
                        minDate={minDate}
                        onChange={(value) => onChangeRange(value)}
                        value={dateValue}
                        id="calendarCont3"
                        tileDisabled={tileDisabled}
                    />
                ) : (
                    <Calendar
                        showDoubleView={false}
                        selectRange={enableRange}
                        minDate={minDate}
                        onChange={(value) => onChangeRange(value)}
                        value={dateValue}
                        id="calendarCont4"
                        tileDisabled={tileDisabled}
                    />
                )}
            </ContainerCalendar>
        </>
    );
}

export default CalendarioReservas;
