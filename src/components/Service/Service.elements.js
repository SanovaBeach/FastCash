import styled from "styled-components";

export const CardColumn = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

export const ShortCard = styled.div`
  padding: 2rem 0;
  margin: 2rem 0;
  max-height: 50rem;
  height: 100%;
  max-width: 40rem;
  background: #eeeeee;
  border-radius: 1rem;
  padding-bottom: 8rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

export const Img = styled.img`
  width: 7rem;
  height: 10rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const Headline = styled.h1`
  color: #212121;
  margin-bottom: 2rem;
  font-weight: 100;
`;

export const Desc = styled.p`
  color: #757575;
  font-size: 1.8rem;
  padding: 0 2rem;
`;
