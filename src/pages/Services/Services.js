import React, { useState } from 'react';
import { LifeStyleService, FinancialService, HeaderInfo } from './Data';
import { Service, Info } from '../../components';
import { Wrapper, Headline } from './Services.elements';

const Services = () => {
  const [service, setService] = useState('LS');
  return (
    <React.Fragment>
      <Info {...HeaderInfo} />
      <Wrapper>
        <Headline onClick={() => setService('LS')} active={service === 'LS' ? true : false}>
          Lifestyle Services
        </Headline>
        <Headline onClick={() => setService('FS')} active={service === 'FS' ? true: false}>
          Financial Services
        </Headline>
      </Wrapper>
      <Service
        LsService={service === 'LS' ? LifeStyleService : FinancialService}
      />
    </React.Fragment>
  );
};

export default Services;
