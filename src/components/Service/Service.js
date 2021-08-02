import React from "react";
import { Container } from "../../globalStyles";
import { CardContainer } from "../Card/Card.elements";

import { CardColumn, ShortCard, Img, Headline, Desc } from "./Service.elements";

const Service = ({ LsService }) => {
  return (
    <React.Fragment>
      <CardContainer>
        <Container>
          <CardColumn>
            {LsService.map((service) => {
              const { id, icon, headline, desc } = service;
              return (
                <ShortCard id={id}>
                  <Img src={icon} alt="" />
                  <Headline>{headline}</Headline>
                  <Desc>{desc}</Desc>
                </ShortCard>
              );
            })}
          </CardColumn>
        </Container>
      </CardContainer>
    </React.Fragment>
  );
};

export default Service;
