import React from "react";
import { CloseIconStyle, Contenedor, IconoMenu, Navegador } from "../styles/HeaderStyle";
import { useState } from "react";
import logo from "../assets/logo-db.png";
import iconoMenu from "../assets/menú.svg";
import { useNavigate } from "react-router-dom";
import Menu from "./molecules/Menu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showBtnRegister, setShowBtnRegister] = useState(true);
  const [showBtnSignIn, setShowBtnSignIn] = useState(true);
  const navigate = useNavigate();

  return (
    <Contenedor>
      <div
        onClick={() => {
          setShowBtnRegister(true);
          setShowBtnSignIn(true);
          navigate("/");
        }}
      >
        <img style={{width: "150px", marginTop: "10px"}} src={logo} alt="logo" />
      </div>
      <IconoMenu onClick={() => setShowMenu(!showMenu)}>
        <img src={iconoMenu} alt={"img_alt"}/>
      </IconoMenu>

      <Navegador showMenu={showMenu} setShowMenu={setShowMenu}>
        <CloseIconStyle onClick={() => setShowMenu(false)}/>
        <Menu
          showBtnRegister={showBtnRegister}
          setShowBtnRegister={setShowBtnRegister}
          showBtnSignIn={showBtnSignIn}
          setShowBtnSignIn={setShowBtnSignIn}
        />
      </Navegador>
    </Contenedor>
  );
}

export default Header;
