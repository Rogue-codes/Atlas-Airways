import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

function Destinations() {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])
  return (
    <Container>
      <div className="top">
        <h2>Destinations we love....</h2>
      </div>
      <div className="bottom">
        <div className="card" data-aos="fade-right">
          <div className="tops">
            <img src='/abuja.jpg' alt="" />
          </div>
          <div className="bottoms">
            <h1>Flights to Abuja</h1>
            <p>Iconic buildings, baseball, world class shopping and eating, not forgetting the vibrant nightlife - this is the ultimate city break.</p>
            <button>Show Flight Deals</button>
          </div>
        </div>
        
        <div className="card" data-aos="zoom-in">
          <div className="tops">
            <img src='/calabar.jpg' alt="" />
          </div>
          <div className="bottoms">
            <h1>Flights to Calabar</h1>
            <p>Fly with Atlas to Calabar and discover a city steeped in culture and history.</p>
            <button>Show Flight Deals</button>
          </div>
        </div>

        <div className="card" data-aos="fade-right">
          <div className="tops">
            <img src='/enugu.jpg' alt="" />
          </div>
          <div className="bottoms">
            <h1>Flights to Enugu</h1>
            <p>Explore one of the fastest growing cities in the South-East with a buzzing cosmopolitan scene and laidback suburbs.</p>
            <button>Show Flight Deals</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Destinations

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
  .top{
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: flex-start;
    padding-left: 5%;
    align-items: center;
    h2{
      @media (max-width:480px) {
        font-size: 2rem;
      }
      font-size: 3vw;
      color: #d30d0d;
      font-weight: 800;
    }
  }
  .bottom {
    @media (max-width:480px) {
      flex-direction: column;
    }
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    .card{
      @media (max-width:480px) {
        width: 90%;
        height: auto;
        margin-bottom: 4%;
      }
      width: 30%;
      height: 80vh;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      .tops{
        width: 100%;
        height: 30%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .bottoms{
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2%;
        gap: 5%;
        align-items: center;
        h1{
          @media (max-width:480px) {
            font-size: 1.7rem;
          }
          font-size: 2.5vw;
          font-family: 'Spectral', serif;
        }
        p{
          @media (max-width:480px) {
            font-size: 1.2rem;
          }
          width: 70%;
          text-align: center;
          font-size: 1.5vw;
          font-family: 'Spectral', serif;
        }
        button{
          @media (max-width:480px) {
            font-size: 1.2rem;
            height: 8vh;
            margin-top: 5%;
            margin-bottom: 2%;
            width: 80%;
          }
          height: 8vh;
          width: 50%;
          background: #d30d0d;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            background: #d30d0d72;
          }
        }
      }
    }
  }
`
