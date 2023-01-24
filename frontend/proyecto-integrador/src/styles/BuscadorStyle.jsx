import styled from "styled-components";

export const BuscadorStyle = styled.div`
    /* background-color: ${({ theme }) => theme.tertiary}; */
    background-image: url("https://group12-rent-me-up-images.s3.us-east-2.amazonaws.com/images/imagen1.avif");
    background-repeat: no-repeat;
    padding: 110px 10px 15px;
    text-align: center;
    background-size: cover;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px) {
        height: 45vh;
    }
`;

export const Titulo = styled.h1`
    color:   #242424;
    margin-bottom: 20px;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 400px;
    //align-items: center;
    grid-gap: 10px;
    justify-content: center;
    background-color: rgba(245, 242, 240, 0.9);
    border-radius: 5px;

    //grid-template-columns: 1fr 1fr 1fr;
    //grid-template-columns: 1fr 1fr 1fr 1fr;

    position: relative;

    @media screen and (min-width: 768px) {
        display: grid;
        justify-content: center;
        background: none;
    }

    @media screen and (min-width: 1024px) {
        grid-auto-columns: minmax(200px, 300px) minmax(200px, 300px) minmax(200px, 300px) minmax(200px, 300px);
        //grid-auto-columns:200px;
        grid-template-rows: 1fr;
        width: 60vw;
        justify-content: center;
    }
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    padding: 0 5px;
    grid-column-start: ${({ columnStar }) => columnStar};
    grid-column-end: ${({ columnEnd }) => columnEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};
`;

export const Div = styled.div`
    grid-column-start: ${({ columnStar }) => columnStar};
    grid-column-end: ${({ columnEnd }) => columnEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};
`;

export const InputStyle = styled.input`
    height: 38px;
    width: 100%;
    border: none;

    &:active {
        outline: none;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
`;

export const Contenedor = styled.div`
    background-color: ${({ theme }) => theme.white};
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: ${({ showCalendar }) => (showCalendar ? "block" : "none")};
    position: absolute;
    top: 90px;
    width: 100%;

    @media screen and (min-width: 768px) {
        top: 50px;
    }

    @media screen and (min-width: 1024px) {
        width: 750px;
        left: calc(50% - 81px);
    }
`;

export const ContainerCalendar = styled.div`
    /* ~~~ navigation styles ~~~ */
    .react-calendar__navigation {
        display: flex;

        .react-calendar__navigation__label {
            font-weight: bold;
            background: none;
            border: none;
            width: 7rem;

            display: flex;
            width: 100%;
            justify-content: space-evenly;
        }

        .react-calendar__navigation__arrow {
            flex-grow: 0.333;
            border: none;
            background: none;
            padding: 1px;
            width: 15px;
            font-size: 1.4rem;
        }

        .react-calendar__navigation__arrow:hover,
        .react-calendar__navigation__label:hover {
            color: ${({ theme }) => theme.primary};
        }
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
        display: none;
    }

    /* ~~~ label styles ~~~ */
    .react-calendar__month-view__weekdays {
        text-decoration: none;
        display: flex;
        padding: 0.5rem 0;
        abbr[title] {
            text-decoration: none;
            margin: 0.5rem;
        }
    }

    /* ~~~ button styles ~~~ */
    button {
        margin: 0.6rem;
        background: none;
        border: 0;
        border-radius: 3px;
        padding: 0.3rem;
        &:hover {
            background-color: ${({ theme }) => theme.tertiary};
            color: ${({ theme }) => theme.white};
        }
        &:active {
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.white};
        }
    }

    .react-calendar__viewContainer {
        @media screen and (min-width: 768px) {
            display: flex;
            justify-content: space-around;
        }
    }

    /* ~~~ day grid styles ~~~ */
    .react-calendar__month-view__days {
        text-align: center;
        display: grid !important;
        grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

        .react-calendar__tile {
            max-width: initial !important;
            margin: 2px 1px;
            text-align: center;
        }
        .react-calendar__tile--range {
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.white};
        }
    }

    /* ~~~ neighboring month & weekend styles ~~~ */
    .react-calendar__month-view__days__day--neighboringMonth {
        color: gray;
    }
    .react-calendar__month-view__days__day--weekend {
        font-weight: bold;
    }

    /* ~~~ other view styles ~~~ */
    .react-calendar__year-view__months,
    .react-calendar__decade-view__years,
    .react-calendar__century-view__decades {
        display: grid !important;
        grid-template-columns: 20% 20% 20% 20% 20%;
        &.react-calendar__year-view__months {
            grid-template-columns: 33.3% 33.3% 33.3%;
        }

        .react-calendar__tile {
            max-width: initial !important;
            margin: 15px 5px;
            padding: 15px;
        }
    }

    // @media screen and (min-width: 768px) {
    //   width: 495px;
    //   top: 45px;
    // }

    // @media screen and (min-width: 1024px) {
    //   width: 600px;
    //   right: -110px;
    // }
`;
