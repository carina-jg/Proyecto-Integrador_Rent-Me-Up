import React from "react";
import "../styles/Carrusel.css";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import Imagenes from "../components/dataImagenes.json";

  class CarruselDesktop extends React.Component {
    state={
     abierto: false,
    }

     abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
     }

    render() {
      return (
        <>
          <div className="btnCarrusel">
            <p onClick={this.abrirModal}>Mostrar más</p>
          </div>
          <Modal isOpen={this.state.abierto}>
            <ModalHeader>
                
            </ModalHeader>

            <ModalBody>
                <div>
                    <p>img1</p>
                    <p>img2</p>
                    <p>img3</p>
                    <p>img4</p>
                    <p>img5</p>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button onClick={this.abrirModal}>cerrar</Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  }
  export default CarruselDesktop