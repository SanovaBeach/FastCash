import React from 'react';
import { Container } from '../../globalStyles';

import {
  MoreInfoContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Headline,
  Desc,
  SecondHead,
  ImgWrapper,
  Img,
} from './MoreInfo.elements';

const MoreInfo = ({
  imgStart,
  lightBg,
  start,
  lightText,
  lightDescText,
  img,
  alt,
  headline,
  headDesc,
  secondHead1,
  desc1,
  secondHead2,
  desc2,
  secondHead3,
  desc3,
}) => {
  return (
    <React.Fragment>
      <MoreInfoContainer lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Headline lightText={lightText}>
                  {headline}
                </Headline>
                <Desc lightDescText={lightDescText}>
                  {headDesc}
                </Desc>
                <SecondHead lightText={lightText}>
                  {secondHead1}
                </SecondHead>
                <Desc lightDescText={lightDescText}>
                  {desc1}
                </Desc>
                <SecondHead lightText={lightText}>
                  {secondHead2}
                </SecondHead>
                <Desc lightDescText={lightDescText}>
                  {desc2}
                </Desc>
                <SecondHead lightText={lightText}>
                  {secondHead3}
                </SecondHead>
                <Desc lightDescText={lightDescText}>
                  {desc3}
                </Desc>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </MoreInfoContainer>
    </React.Fragment>
  );
};

export default MoreInfo;
