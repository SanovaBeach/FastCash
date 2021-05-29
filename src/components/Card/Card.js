import React from 'react';
import { Container } from '../../globalStyles';
import {
  CardContainer,
  TextWrapper,
  Heading,
  Desc,
  CardColumn,
  ColumnInfo,
  ColumnTitle,
  ColumnFeatures,
  ColumnCheck,
  ColumnDesc,
} from './Card.elements';

const Card = () => {
  return (
    <CardContainer>
      <Container>
        <TextWrapper>
          <Heading>Unlock all features when you get verified</Heading>
          <Desc>
            Fully verify your FastCash account to gain access to the wide range
            of services in the FastCash App. All you need is a valid ID and a
            selfie. Tap Verify Now in the FastCash App to start!
          </Desc>
        </TextWrapper>
        <CardColumn>
          <ColumnInfo>
            <ColumnTitle>Basic</ColumnTitle>
            <ColumnFeatures>
              <ColumnDesc>
                <ColumnCheck /> 5 available features
              </ColumnDesc>
              <ColumnDesc>
                <ColumnCheck /> PHP 50,000 Wallet Size
              </ColumnDesc>
              <ColumnDesc>
                <ColumnCheck /> PHP 10,000 Monthly Limit
              </ColumnDesc>
              <ColumnDesc>
                <ColumnCheck /> PHP 10,000 Monthly Outgoing Limit
              </ColumnDesc>
            </ColumnFeatures>
          </ColumnInfo>
          <ColumnInfo>
            <ColumnTitle>Fully Verified</ColumnTitle>
            <ColumnFeatures>
              <ColumnDesc>
                <ColumnCheck /> All features available
              </ColumnDesc>
              <ColumnDesc>
                <ColumnCheck /> PHP 100,000 Wallet Size
              </ColumnDesc>
              <ColumnDesc>
                <ColumnCheck /> PHP 100,000 Monthyl Limit
              </ColumnDesc>
              <ColumnDesc>
                <ColumnCheck /> PHP 100,000 Daily Outgoing Limit
              </ColumnDesc>
            </ColumnFeatures>
          </ColumnInfo>
        </CardColumn>
      </Container>
    </CardContainer>
  );
};

export default Card;
