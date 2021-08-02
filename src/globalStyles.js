import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Source Sans Prop', sans-serif
  }

  html {
    font-size: 62.5%;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 130rem;
  margin-right: auto;
  margin-left: auto;
  padding-left: 5rem;
  padding-right: 5rem;

  @media screen and (max-width: 960px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 3rem;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#BDBDBD" : "#757575")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.6rem")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#757575" : "#BDBDBD")};
  }
`;

export default GlobalStyle;
