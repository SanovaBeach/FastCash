import styled from 'styled-components'
import {Container} from '../../globalStyles'
import {FaDollarSign} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
  background: #ff5722;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  ${Container}
`

export const NavIcon = styled(FaDollarSign)`
  margin-right: 0;
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 4rem;
  display: flex;
  align-items: center;
  font-weight: 900;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align:  center;

`

export const NavLinks = styled(Link)`
  font-size: 1.6rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: .5rem 1rem;
`

export const NavItem = styled.li`
  height: 8rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #00adb5;
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12rem;
  }
`

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
`