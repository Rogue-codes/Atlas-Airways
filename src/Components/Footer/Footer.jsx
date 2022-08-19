import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Foot>
      <ul>
        <li>Qatar Airways</li>
        <li>About us</li>
        <li>Awards</li>
        <li>Careers</li>
        <li>Press releases</li>
        <li>Sponsorship</li>
        <li>Travel alerts</li>
        <li>Environmental sustainability</li>
        <li>Accessibility</li>
      </ul>

      <ul>
        <li>Group companies</li>
        <li>Hamad International Airport</li>
        <li>Qatar Executive</li>
        <li>Qatar Duty Free</li>
        <li>Qatar Airways Cargo</li>
        <li>More about Group companies</li>
        <li>Business partners</li>
        <li>Affiliate marketing</li>
        <li>e-Procurement</li>
        <li>Trade partners</li>
      </ul>

      <ul>
        <li>Business solutions</li>
        <li>Corporate travel</li>
        <li>Beyond Business</li>
        <li>QMICE Meetings and Events</li>
        <li>Business partners</li>
        <li>Affiliate marketing</li>
        <li>e-Procurement</li>
        <li>Trade partners</li>
      </ul>

      <ul>
        <li>Business partners</li>
        <li>Affiliate marketing</li>
        <li>e-Procurement</li>
        <li>Trade partners</li>
      </ul>
    </Foot>
  )
}

export default Footer

const Foot = styled.footer`
  @media (max-width:480px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  width: 100%;
  height: Auto;
  border: 1px solid #000;
  margin-top: 5%;
  background:#d30d0d ;
  display: flex;
  justify-content: flex-start;
  gap: 8%;
  padding: 2%;
  ul{
    @media (max-width:480px) {
      width: 40%;
      margin-top: 5%;
    }
    list-style-type: none;
    li{
      @media (max-width:480px) {
      font-size:.7rem;
    }
      color: #e9e6e6;
      font-size: 1.2vw;
      margin-bottom: 2%;
      cursor: pointer;
      transition: all 0.5s linear;
      &:nth-child(1){
        @media (max-width:480px) {
          font-size:.8rem;
        }
        font-size: 2vw;
        font-weight: 800;
        margin-bottom: 5%;
      }
      &:hover{
        text-decoration: underline;
      }
    }
  }
`