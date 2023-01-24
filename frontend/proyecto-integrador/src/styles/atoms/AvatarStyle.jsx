import styled from "styled-components";

export const Contenedor = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 5px;
        text-align: right;
        // width: 150px;
        
        @media screen and (min-width: 768px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            align-items: flex-star;
            text-align: left;
            // width: 130px;
        }
    `

export const UserInitials = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
        background-color: ${({ theme }) => theme.secondary};
    }
`;