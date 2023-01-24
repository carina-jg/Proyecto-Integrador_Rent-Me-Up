import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Colors } from "./styles/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./services/UserContext"
import Footer from "./components/molecules/Footer";
import Home from "./pages/home/Home";
import SignUp from "./pages/login/SignUp";
import SignIn from "./pages/login/SignIn";
import { useContext, useEffect } from "react";
import DetallesProducto from "./components/DetallesProducto";
import ReservaExitosa from "./components/ReservaExitosa";
// import ProductoExitoso from "./components/ProductoExitoso";
import Reserva from "./pages/home/Reserva";
import { decodeToken } from "react-jwt";
import {CreacionProducto} from "./pages/home/CreacionProducto"


function App() {
  const {setUser} = useContext(UserContext)
  const token = localStorage.getItem('token')
  const decoded = decodeToken(token);

  useEffect(() => {
    if(token !== null) {
      setUser({userData: decoded.user})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  


  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={Colors}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/products/:id" element={<DetallesProducto/>} />
          <Route path="/products/:id/reservation" element={<Reserva/>} />
          <Route path="/reserva-exitosa" element={<ReservaExitosa/>} />
          <Route path="/administracion" element={<CreacionProducto/>} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
