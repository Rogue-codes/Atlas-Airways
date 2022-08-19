import React from 'react'
import styled from 'styled-components'
import home from '../../Assets/home.jpeg'
import BookingComponent from './BookingComponent'
function Landing() {
  return (
    <Container>
      <BookingComponent/>
    </Container>
  )
}

export default Landing

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background: linear-gradient(90deg, #d30d0d65 0%, #d30d0d30 32%, #d30d0d 100%),url(${home});
  background-size: cover;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  display: flex;
  justify-content: flex-end;
  padding: 5%;
`