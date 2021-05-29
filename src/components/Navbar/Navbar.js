import React from 'react';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements';

import {Button} from '../../globalStyles'

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <NavIcon />
            FastCash
          </NavLogo>
          <NavMenu>
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
              <NavBtnLink to='/signup'>
                <Button>SIGN UP</Button>
              </NavBtnLink>
            </NavItemBtn>
          </NavMenu>
        </NavContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
