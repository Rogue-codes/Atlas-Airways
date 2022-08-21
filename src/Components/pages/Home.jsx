import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import Destinations from '../HomeComponents/Destinations'
import Landing from '../HomeComponents/Landing'
import LatestFlight from '../HomeComponents/LatestFlight'
import LetFly from '../HomeComponents/LetFly'
import Nav from '../HomeComponents/Nav'
import NewsLetter from '../HomeComponents/NewsLetter'
import NextLevel from '../HomeComponents/NextLevel'
import Slider from '../HomeComponents/Slider'
import Tab from '../HomeComponents/Tabsection/Tab'

function Home() {
  return (
    <Container>
      <Nav/>
      <Landing/>
      <LatestFlight/>
      <Destinations/>
      <NextLevel/>
      <Tab/>
      <LetFly/>
      <NewsLetter/>
      <Footer/>
      <Slider/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Spectral', serif;
  position: relative;
`