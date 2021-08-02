import styled from "styled-components";

export const FeaturedContainer = styled.div`
  padding: 15rem 0;
`;
export const FeaturedHeading = styled.h1`
  text-align: center;
  font-size: 7rem;
  color: #757575;
  margin-bottom: 7rem;

  @media screen and (max-width: 768px) {
    font-size: 5rem;
    margin-bottom: 3rem;
  }
`;

export const FeaturedBrands = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Img = styled.img`
  max-width: 20rem;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;
