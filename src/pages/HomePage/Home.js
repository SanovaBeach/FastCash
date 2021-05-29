import React from 'react'
import {Info, Featured} from '../../components'
import {HeaderInfo, Info1, Info2, Info3} from './Data'

const Home = () => {
  document.title = 'FastCash - Save, Invest, Play'

  return (
    <div>
      <Info {...HeaderInfo}/>
      <Info {...Info1}/>
      <Info {...Info2}/>
      <Info {...Info3}/>
      <Featured />
    </div>
  )
}

export default Home