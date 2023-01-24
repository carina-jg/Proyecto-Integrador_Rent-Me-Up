import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const Contenedor = styled.div`
    background-color: ${({ theme }) => theme.fondo};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 15px;
    position: fixed;
    width: 100%;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    color: ${({ theme }) => theme.titulos};
    font-weight: bold;
    z-index: 9;

    @media screen and (min-width: 768px) {
        padding: 0 30px;
    }
`

export const IconoMenu = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const Navegador = styled.div`
    position: absolute;
    top: 0;
    right: ${props => props.showMenu ? "0" : "-100%"};
    width: 75%;
    background-color: ${({ theme }) => theme.fondo};
    transition: 0.5s all ease;

    @media screen and (min-width: 768px) {
        background-color: transparent;
        display: contents;
    }
`

export const CloseIconStyle = styled(CloseIcon)`
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${({ theme }) => theme.white};

    @media screen and (min-width: 768px) {
        color: transparent;
    }
`;

