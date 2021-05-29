import React from 'react';
import forbes from '../../images/forbes.svg';
import digitaltrends from '../../images/digitaltrends.svg';
import techcrunch from '../../images/techcrunch.svg';
import businessinsider from '../../images/businessinsider.svg';
import oracle from '../../images/oracle.svg';


import {
  FeaturedContainer,
  FeaturedBrands,
  FeaturedHeading,
  Img
} from './Featured.elements';
import { Container } from '../../globalStyles';

const Featured = () => {
  return (
    <React.Fragment>
      <Container>
        <FeaturedContainer>
          <FeaturedHeading>As Featured in</FeaturedHeading>
          <FeaturedBrands>
            <Img src={forbes} alt="forbes logo" />
            <Img src={techcrunch} alt="techcrunch logo" />
            <Img src={digitaltrends} alt="digital trends logo" />
            <Img src={businessinsider} alt="business insider logo" />
            <Img src={oracle} alt="oracle logo" />
          </FeaturedBrands>
        </FeaturedContainer>
      </Container>
    </React.Fragment>
  );
};

export default Featured;
