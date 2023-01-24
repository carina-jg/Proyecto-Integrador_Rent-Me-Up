import styled from "styled-components";

export const SeccionReserva = styled.div`
    background-color: rgba(56, 59, 88, 0.1);
    padding: 30px 15px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 30px 30px 40px;
    }

    @media screen and (min-width: 1024px) {
        //display: grid;
        display: flex;
        //align-items: flex-end;
        grid-template-columns: 1500px 500px;

        gap: 50px;
    }
`;

export const Titulo = styled.h1`
    @media screen and (min-width: 1024px) {
        grid-column: 1 / 3;
    }
`;

export const ContainerCalendar = styled.div`
    /* ~~~ container styles ~~~ */
    // min-width: 700px;
    // max-width: 1000px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    border-radius: 0px 0px 5px 5px;
    position: relative;

    // @media screen and (min-width: 768px) {
    //     width: 700px;
    // }

    @media screen and (min-width: 1024px) {
        border-radius: 5px;
        width: 750px;
    }

    /* ~~~ navigation styles ~~~ */
    .react-calendar__navigation {
        display: flex;

        .react-calendar__navigation__label {
            font-weight: bold;
            // background: none;
            // border: none;
            // width: 7rem;

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

            @media screen and (min-width: 1024px) {
                background-color: ${({ theme }) => theme.primary};
                color: ${({ theme }) => theme.white};
                border-radius: 50%;
            }
        }

        .react-calendar__navigation__arrow:hover,
        .react-calendar__navigation__label:hover {
            color: ${({ theme }) => theme.primary};
        }

        .react-calendar__navigation__prev-button {
            @media screen and (min-width: 1024px) {
                position: absolute;
                top: 130px;
                left: 10px;
                width: 35px;
                height: 35px;
            }
        }

        .react-calendar__navigation__next-button {
            @media screen and (min-width: 1024px) {
                position: absolute;
                right: 10px;
                top: 130px;
                width: 35px;
                height: 35px;
            }
        }

        .react-calendar__navigation__prev2-button,
        .react-calendar__navigation__next2-button {
            display: none;
        }
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

    //   @media screen and (min-width: 768px) {
    //     width: 495px;
    //     top: 45px;
    //   }

    //   @media screen and (min-width: 1024px) {
    //     width: 600px;
    //     right: -110px;
    //   }
`;

export const ContenedorBoton = styled.div`
    display: grid;
    justify-content: center;
    gap: 15px;
    // z-index: 10;
    @media screen and (min-width: 768px) {
        //grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr;
        align-self: center;
        height: 150px;
        background-color: ${({ theme }) => theme.white};
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
