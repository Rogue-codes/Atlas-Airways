import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

function LatestFlight() {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])
  const data =[
    {
      id: 1,
      city: 'Asaba',
      class:'Economy round trip from',
      price:58000
    },
    {
      id: 1,
      city: 'Kano',
      class:'Economy round trip from',
      price:68890
    },
    {
      id: 1,
      city: 'Enugu',
      class:'Economy round trip from',
      price:128060
    }
    
  ]

  const [latestFlight, setLatestFlight] = useState("Lagos")
  return (
    <Container data-aos="fade-up">
      <h1 className='head'>Latest flight offers from: <span>{latestFlight}</span></h1>
      <select name="" id="" value={latestFlight} onChange={(e)=>setLatestFlight(e.target.value)}>
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="PortHarcourt">PortHarcourt</option>
      </select>
      <div className="flexBox">
          {
          data.map((item)=>(
            <div className="card">
              <div className="top">
                <p>{item.city}</p>
              </div>
              <div className="bottom">
                <p>{item.class}</p><h1>₦{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
              </div>
            </div>
          ))
        }
      </div>
      <button className='offers'>see all flight offers</button>
    </Container>
  )
}

export default LatestFlight

const Container = styled.div`
  @media (max-width:480px) {
    height: auto;
  }
  width: 100%;
  height: 80vh;
  background: #f4f5f6;
  padding-top: 3%;
  position: relative;
  select{
    @media (max-width:480px) {
      display: block;
      width: 40%;
      margin-left: 3%;
      margin-top: -5%;
    }
    width: 10%;
    height: 6vh;
    &:focus{
      outline: none;
    }
  }
  .offers{
    @media (max-width:480px) {
      font-size: 1rem;
      width: 80%;
      margin-left: 10%;
      margin-top: 5%;
      margin-bottom: 5%;
    }
    width: 30%;
    height: 8vh;
    margin-left: 35%;
    font-size: 1.5vw;
    border: 2px solid #d30d0d;
    color: #d30d0d;
    text-transform: uppercase;
    font-weight: 500;
    transition: all .5s linear;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #d30d0d;
    }
  }
  .head{
    @media (max-width:480px) {
      font-size: 1.2rem;
    }
    text-align: center;
    padding: 3%;
    display: inline;
    font-size: 2vw;
    color: #333;
    span{
      @media (max-width:480px) {
        font-size: 1.2rem;
        display: block;
        text-align:left;
      }
      font-size: 1.5vw;
      color: #d30d0d;
      margin-left: 2%;
      position: relative;
      .drop{
        position: absolute;
        bottom: 0;
        cursor: pointer;
      }
    }
  }
  .flexBox{
    @media (max-width:480px) {
     flex-direction: column;
    }
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 2%;
    .card{
      @media (max-width:480px) {
        width: 90%;
        margin-top: 5%;
      }
      width: 30%;
      height: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background: #fff;
      border-radius: 5px;
      .top{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: flex-start;
        padding: 5%;
        align-items: center;
        p{
          @media (max-width:480px) {
            font-size: 2rem;
            display: block;
          }
          font-size: 2vw;
          font-weight: 800;
          font-family: "spectral" serif;
        }
      }
      .bottom{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        padding: 5%;
        color: #000;
        p{
          @media (max-width:480px) {
            font-size: 1.2rem;
          }
          font-size: 1.2vw;
          font-weight: 500;
        }
        h1{
          color: #d30d0d;
        }
      }
    }
  }
`