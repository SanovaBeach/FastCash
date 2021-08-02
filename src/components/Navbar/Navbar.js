import React, { useState, useEffect } from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  MobileIcon,
} from "./Navbar.elements";

import { Button } from "../../globalStyles";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWIdth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <React.Fragment>
      <Nav>
        <NavContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            FastCash
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/getting-started">Geting Started</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="sign-up">
                  <Button onClick={handleClick} fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
