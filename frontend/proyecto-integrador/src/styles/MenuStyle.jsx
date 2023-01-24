import styled from "styled-components";

export const ContenedorMenu = styled.div`
    height: 100vh;

    @media screen and (min-width: 768px) {
        height: auto;
    }
`

export const Titulo = styled.div`
    background-color: ${({ theme }) => theme.primary};
    height: 180px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    padding: 10px;
`

export const BotonesIC = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
}   
`

export const AvatarUser = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 30px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`