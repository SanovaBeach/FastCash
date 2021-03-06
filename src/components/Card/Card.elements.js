import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const CardContainer = styled.div`
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 4rem 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 1.2rem;
  color: #ff5722;

  @media screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

export const Desc = styled.p`
  text-align: center;
  font-size: 1.6rem;
  max-width: 66rem;
  color: #757575;
`;

export const CardColumn = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

export const ColumnInfo = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  width: 47%;
  height: 42rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 760px) {
    width: 100%;
    margin: 2rem 0;
  }
`;

export const ColumnTitle = styled.h1`
  font-size: 4rem;
  color: #ff5722;
  text-align: center;
  padding: 3rem 0;
`;

export const ColumnFeatures = styled.div`
  text-align: center;
`;

export const ColumnCheck = styled(FaCheck)`
  font-size: 3rem;
  color: #ff5722;
  margin-left: 2rem;
  margin-right: 1rem;
`;
export const ColumnDesc = styled.p`
  font-size: 2rem;
  color: #757575;
  height: 3rem;
  margin: 2.4rem 0;
  display: flex;
  padding: 0 1rem;
  text-align: start;

  @media screen and (max-width: 760px) {
    justify-content: flex-start;
    align-items: center;
  }
`;
