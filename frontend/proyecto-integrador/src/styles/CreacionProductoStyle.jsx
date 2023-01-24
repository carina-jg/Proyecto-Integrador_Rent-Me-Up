import styled from "styled-components";

export const TituloCP = styled.div`
    background-color: #f5c6aa;
    height: 100px;
    width: 100%;
    padding-top: 32px;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
        padding-left: 17px;
    }

    @media screen and (max-width: 414px) {
    height: 80px;
  }
`
export const ArrowHeader = styled.div `
position: absolute;
  top: 87px;
  right: 20px;
  cursor: pointer;
  width: 30px;

  @media screen and (max-width: 414px) {
    top: 95px;
    width: 40px;
  }
`

export const ContenedorFormurarios = styled.div`
    width: 90%;
    margin: 30px auto;
    // margin-top: 30px;
    // margin-left: 43px;
    // margin-bottom: 30px;
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #dfe4ea;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    @media screen and (max-width: 768px) {
        margin-left: 17px;
    }
`;

export const BloqueFormurario = styled.form`
    width: 90%;
    margin: auto;
    // margin-top: 20px;
    // margin-left: 10px;
    margin-bottom: 30px;
    /* background-color:#FFFFFF; */
    padding: 20px 0;
    /* border: 1px solid #DFE4EA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px; */
`;
export const FormurariosCP = styled.div`
    display: grid;
    gap: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`;

export const FormularioAgregar = styled.div`
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        width: 500px;
        margin: auto;
    }
`;

export const FormularioAI = styled.div`
    width: 500px;
    margin: auto;
`;

export const Formurario = styled.input`
    background-color: #dfe4ea;
    opacity: 0.4;
    border: 1px solid #ffffff;
    border-radius: 5px;
    outline: none;
    width: 100%;
    height: 40px;
    margin-top: 5px;
    padding-left: 15px;
    margin-bottom: 20px;
`;
export const BotonFormurario = styled.div`
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        width: 400px;
        margin: auto;
        margin-top: 20px;
    }
`;
