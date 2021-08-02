import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  padding: ${({ header }) => (header ? "18rem" : "15rem")} 0;
  background: ${({ lightBg }) => (lightBg ? "#eeeeee" : "#ff5722")};

  @media screen and (max-width: 768px) {
    padding: 10rem 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 54rem;
  padding-top: 0;
  padding-bottom: 6rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#757575" : "#212121")};
  font-size: 1.8rem;
  line-height: 1.6rem;
  letter-spacing: 1.4px;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  font-size: 4.8rem;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#a9b3c1" : "#212121")};
`;
export const Subtitle = styled.p`
  max-width: 44rem;
  margin-bottom: 3.5rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#fff" : "#212121")};
`;

export const ImgWrapper = styled.div`
  max-width: 55rem;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 50rem;
`;
