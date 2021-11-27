import React from 'react';
import '../../App.css';
import Header from './../Layout/Navbar';

import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeH1,
  HomeP
} from './HomeElements';

//import { productData} from '../Foods/data';

import {
  FaMap
} from "react-icons/fa";


const Home = () => {
 //const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => {
    //setIsOpen(!isOpen);
  

  return (
    <>
    <Header />
    <HomeContainer>
      <HomeContent>
        <HomeItems>
          <HomeH1>Bienvenido</HomeH1>
          <HomeP>Visualiza nuestros platillos</HomeP>
        </HomeItems>
      </HomeContent>
    </HomeContainer>
         <center><HomeP>Encuentranos en Google Maps</HomeP></center>
         <center><FaMap className="logoMap" /></center>
         <br />
       <center><a href="https://www.maps.google.com.mx/">Ubicación de Sucursal</a></center>
       <br />
    </>
    
    
  );
};

export default Home;