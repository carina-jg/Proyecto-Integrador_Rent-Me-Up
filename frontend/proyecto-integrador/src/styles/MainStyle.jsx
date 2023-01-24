//import { render } from "@testing-library/react";
import styled from "styled-components";

export const ContenedorCategorias = styled.div`
    padding: 30px 20px 20px;

    @media screen and (min-width: 768px) {
        padding: 30px 70px 20px;
    }

    @media screen and (min-width: 1024px) {
        padding: 30px 40px 20px;
    }
`

export const GridCategorias = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
    gap: 20px;
    padding: 10px 0;
`

export const ContenedorBooking = styled.div`
    background-color: #f4f2f2;
    padding: 30px 15px 70px;
    text-align: center;
    //display: ${({ renderizado }) => (renderizado ? "block" : "none")};

    @media screen and (min-width: 768px) {
        padding: 30px 30px 70px;        
    }

    @media screen and (min-width: 1024px) {
        padding: 30px 60px 70px;
    }
`

export const GridBooking = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: 15px;
    padding: 10px 0;
    max-width: 1500px;
    margin: auto;
`

