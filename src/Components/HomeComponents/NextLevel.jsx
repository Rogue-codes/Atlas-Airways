import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"


function NextLevel() {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])
  return (
    <Container>
      <div className="top">
        <h2>Next level flying....</h2>
      </div>
      <div className="bottom">
        <div className="card" data-aos="fade-right">
          <div className="tops">
            <img src='/economy.webp' alt="" />
          </div>
          <div className="bottoms">
            <h1>Fly Premium Economy</h1>
            <p>Experience award-winning premium travel. It's the little touches here and there that help you truly enjoy your time in the air.</p>
            <button>Show Flight Deals</button>
          </div>
        </div>
        
        <div className="card" data-aos="fade-left">
          <div className="tops">
            <img src='/fisrt.webp' alt="" />
          </div>
          <div className="bottoms">
            <h1>Discover Upper Class</h1>
            <p>Experience the next level of luxurious travel, whether you're with us for business or pleasure, travelling in Virgin Atlantic Upper Class makes your journey something to look forward to.</p>
            <button>Show Flight Deals</button>
          </div>
        </div>

      </div>
    </Container>
  )
}

export default NextLevel

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
  margin-top: 5%;
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
        margin-top: 5%;
        height: auto;
      }
      width: 45%;
      height: 80vh;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      .tops{
        width: 100%;
        height: 40%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .bottoms{
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:3%;
        gap: 5%;
        align-items: flex-start;
        h1{
          @media (max-width:480px) {
            font-size: 1.5rem;
          }
          font-size: 2.5vw;
          font-family: 'Spectral', serif;
        }
        p{
          @media (max-width:480px) {
            font-size: 1.2rem;
          }
          width: 100%;
          font-size: 1.5vw;
          font-family: 'Spectral', serif;
        }
        button{
          @media (max-width:480px) {
            margin-top: 5%;
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
