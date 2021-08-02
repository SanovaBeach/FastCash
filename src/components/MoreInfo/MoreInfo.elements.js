import styled from "styled-components";

export const MoreInfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#eeeeee" : "#ff5722")};
  padding: 8rem 0;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  margin: 0 -15px -15px -15px;
  align-items: center;
  flex-wrap: wrap;
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
`;

export const Headline = styled.h1`
  margin-bottom: 2.4rem;
  font-size: 4.8rem;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#a9b3c1" : "#212121")};

  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
`;
export const SecondHead = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 2.2rem;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#a9b3c1" : "#212121")};
`;

export const Desc = styled.p`
  margin-bottom: 2.4rem;
  font-size: 1.4rem;
  line-height: 1.1;
  color: ${({ lightDescText }) => (lightDescText ? "#fff" : "#212121")};
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
