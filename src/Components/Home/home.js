import React from 'react';
import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeH1,
  HomeP,
  HomerBtn
} from './HomeElements';

const Home = () => {
 //const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => {
    //setIsOpen(!isOpen);
  

  return (
    <><HomeContainer>
  <HomeContent>
              <HomeItems>
                  <HomeH1>Bienvenido</HomeH1>
                  <HomeP>Visualiza nuestros platillos</HomeP>
                  <HomerBtn>Place Order</HomerBtn>
                 
              </HomeItems>
          </HomeContent>
      </HomeContainer></>
  );
};

export default Home;