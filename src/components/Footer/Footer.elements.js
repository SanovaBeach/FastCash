import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  padding: 6rem 0;
  background: #ff5722;
  color: #fff;
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const FooterLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 4rem;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 2.5rem;
  }
`;

export const WebsiteContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const WebsiteLinks = styled.a`
  cursor: pointer;
  margin: 0 4px;
  text-decoration: none;
  color: #fff;
`;
