import styled from "styled-components";

export const ButtonNoBackgroundStyle = styled.button`
    width: ${(props) =>
        props.fullwidth === true ? "100%" : props.widthButton + "px"};
    height: 40px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    &:hover {
        border-color: #AEC0C1;
        transform: scale(0.96);
        transition: all 100ms;
    }
    &:active {
        transform: scale(0.96);
    }
`;

export const ButtonStyle = styled.button`
    width: ${(props) =>
        props.fullwidth === true ? "100%" : props.widthButton + "px"};
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    grid-column-start: ${({ columnStar }) => columnStar};
    grid-column-end: ${({ columnEnd }) => columnEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};
    padding: 0 1rem 0 1rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    &:hover {
        background-color: #AEC0C1;
    }
    &:active {
        background-color:#fc5736;
    }
`;

export const ButtonMobilStyle = styled.button`
    width: ${(props) =>
        props.fullwidth === true ? "100%" : props.widthButton + "px"};
    height: 60px;
    border: none;
    text-align: right;
    padding: 15px;
    background-color: transparent;
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
`;
