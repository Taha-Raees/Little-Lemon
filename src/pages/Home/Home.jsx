import React from 'react'
import CenterDisplay from '../../components/CenterDisplay/CenterDisplay'
import MainDisplay from '../../components/MainDisplay/MainDisplay'

const Home = () => {
  return (
    <div className="home">
      <MainDisplay/>
      <CenterDisplay/>
    </div>
  )
}

export default Home