import styled from "styled-components";

export const ContenedorCtg = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* border: 1px solid #F3F1ED; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    max-width: 500px;
    cursor: pointer;
    &:hover {
        transform: scale(1.04);
        transition: all 300ms;
    }

`

export const Imagen = styled.img`
    width: 100%;
    height: 240px;
    border-radius: 8px 8px 0px 0px;
    object-fit: cover;
`

export const Info = styled.div`
    padding: 10px;
`