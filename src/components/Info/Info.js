import React from 'react';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import {
  InfoContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './Info.elements';


const Info = ({
  header,
  lightBg,
  imgStart,
  start,
  img,
  alt,
  lightTopLine,
  lightText,
  lightTextDesc,
  desc,
  topLine,
  headLine,
  buttonLabel,
  link,
}) => {
  return (
    <React.Fragment>
      <InfoContainer lightBg={lightBg} header={header}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{desc}</Subtitle>
                {buttonLabel ? (
                  <Link to={`/${link}`}>
                    <Button fontBig>{buttonLabel}</Button>
                  </Link>
                ) : null}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoContainer>
    </React.Fragment>
  );
};

export default Info;
