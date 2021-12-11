import React from "react";
import '../../App.css';
//import Header from './../Layout/Navbar';


import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeH1,
  HomeP,
  HomerBtn
} from '../Home/HomeElements';

import { productData} from '../Foods/data';
import Products from '../Foods/index1';

import {
  FaMap
} from "react-icons/fa";



const UserView = () => {
  
  return (
    <>
        <HomeContainer>
          <HomeContent>
            <HomeItems>
              <div>Home</div>
              <HomeH1>Bienvenido</HomeH1>
              <HomeP>Visualiza nuestros platillos</HomeP>
            </HomeItems>
          </HomeContent>
        </HomeContainer>
        <br />
        <center><HomeP>Conoce nuestros  Platillos</HomeP></center>
        <Products data={productData} />
        <center> <HomerBtn>Ver más Productos</HomerBtn></center>

        <center><HomeP>Encuentranos en Google Maps</HomeP></center>
        <center><FaMap className="logoMap" /></center>
        <br />
        <center><a href="https://www.google.com.mx/maps/@18.3747994,-98.687867,17z">Ubicación de Sucursal</a></center>
        <br />
      </>
    
    
  );
}

export default UserView;