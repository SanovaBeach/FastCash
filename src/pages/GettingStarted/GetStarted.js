import React from 'react'
import {Info, Card, MoreInfo} from '../../components'
import {HeaderInfo, Info1, MoreInfo1, MoreInfo2} from './Data'

const GetStarted = () => {
  return (
    <React.Fragment>
      <Info {...HeaderInfo} />
      <Info {...Info1} />
      <Card />
      <MoreInfo {...MoreInfo1} />
      <MoreInfo {...MoreInfo2} />
    </React.Fragment>
  )
}

export default GetStarted