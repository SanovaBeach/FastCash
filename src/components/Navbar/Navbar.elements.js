import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #ff5722;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 480px) {
    height: 6rem;
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  ${Container}
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const NavIcon = styled(FaDollarSign)`
  margin-right: 0;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 4rem;
  display: flex;
  align-items: center;
  font-weight: 900;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 8rem;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }

  @media screen and (max-width: 480px) {
    top: 6rem;
  }
`;

export const NavLinks = styled(Link)`
  font-size: 1.6rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItem = styled.li`
  height: 8rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #00adb5;
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12rem;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1.6rem;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
