import styled from "styled-components";

export const ContenedorCard = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    background-color: ${({ theme }) => theme.white};
    //border: 1px solid #DFE4EA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    &:hover {
        transform: scale(1.01);
        transition: all 200ms;
    }

    @media screen and (min-width: 768px) {
        border-radius: 10px;
    }
`

export const Imagen = styled.img`
    width: 100%;
    height: 240px;
    min-height: 100%;
    /* max-height:240px; */
    border-radius: 8px 8px 0px 0px;
    object-fit:cover;
    @media screen and (min-width: 640px) {
        border-radius: 8px 0px 0px 8px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    text-align:start;
`
export const TituloCard = styled.div `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Descripcion = styled.div `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
