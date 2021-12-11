import React, { useState } from "react";
import Logo from '../../assets/images/LogoBTOS.png';
import Link from '@material-ui/core/Link';


import {
  Container,
  LogoContainer,
  Wrapper
} from "./NavbarElements";

import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
           <img src= {Logo} alt="Logo" />
          </LogoContainer>

    
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
