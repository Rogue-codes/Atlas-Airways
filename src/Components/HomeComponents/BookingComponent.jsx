import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../widgets/Button'
import Aos from 'aos'
import "aos/dist/aos.css"

function BookingComponent() {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])

  const btn = [
    {
      id: 'return',
      name: 'Return'
    },
    {
      id: 'oneway',
      name: 'One way'
    }
  ]
  const [selected, setSelected] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Book data-aos="fade-up">
      <form action="" onSubmit={handleSubmit}>
        <div className="firstLayer">
          <select name="" id="">
            <option value="">from</option>
            <option value="Abuja">Abuja</option>
            <option value="Asaba">Asaba</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Benin">Benin</option>
            <option value="Enugu">Enugu</option>
            <option value="Ilorin">Ilorin</option>
            <option value="Jos">Jos</option>
            <option value="Kano">Kano</option>
            <option value="Lagos">Lagos</option>
            <option value="Owerri">Owerri</option>
            <option value="PortHarcourt">PortHarcourt</option>
          </select>

          <select name="" id="">
          <option value="">to</option>
            <option value="Abuja">Abuja</option>
            <option value="Asaba">Asaba</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Benin">Benin</option>
            <option value="Enugu">Enugu</option>
            <option value="Ilorin">Ilorin</option>
            <option value="Jos">Jos</option>
            <option value="Kano">Kano</option>
            <option value="Lagos">Lagos</option>
            <option value="Owerri">Owerri</option>
            <option value="PortHarcourt">PortHarcourt</option>
          </select>
        </div>

        <div className="secondLayer">
          {
            btn.map((item) => (
              <Button name={item.name} id={item.id} active={selected === item.id} setSelected={setSelected}/>
            ))
          }
        </div>

        <div className="thirdLayer">
          <input type="date" name="" id="" />
          <input type="date" name="" id="" ds={selected === 'oneway' ? 'none' : 'block'}/>
        </div>

        <div className="fourthLayer">
          <select name="" id="">
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="5">5 Adults</option>
            <option value="6">6 Adults</option>
            <option value="7">7 Adults</option>
            <option value="8">8 Adults</option>
            <option value="9">9 Adults</option>
          </select>

          <select name="" id="">
            <option value="0">0 Child</option>
            <option value="1">1 Child</option>
            <option value="2">2 Children</option>
            <option value="3">3 Children</option>
            <option value="4">4 Children</option>
            <option value="5">5 Children</option>
            <option value="6">6 Children</option>
          </select>
        </div>

        <div className="fifthLayer">
          <select name="" id="">
            <option value="0">0 Infant</option>
            <option value="1">1 Infant</option>
            <option value="2">2 Infants</option>
            <option value="3">3 Infants</option>
            <option value="4">4 Infants</option>
            <option value="5">5 Infants</option>
            <option value="6">6 Infants</option>
          </select>
        </div>

        <div className="sixthLayer">
          <input type="text" name="" id="" placeholder="EVoucher" />
        </div>
        <button className='submit'>Submit</button>
      </form>
    </Book>
  )
}

export default BookingComponent

const Book = styled.div`
  @media (max-width:480px) {
    width: 90%;
    margin: auto;
  }
  width: 40%;
  height: auto;
  form{
    @media (max-width:480px) {
      background: #ffffff96;
    }
    width: 100%;
    height: auto;
    padding: 2%;
    background: white;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    .firstLayer{
      width: 100%;
      height: 9vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0% 2%;
      select{
      @media (max-width:480px) {
        font-size: .7rem;
        height: 5vh;
      }
        width: 45%;
        height: 80%;
        transition: all .5s linear;
        &:focus{
          border: solid 2px #d30d0d;
          outline: none;
        }
      }
    }
    .secondLayer{
      width: 100%;
      height: 9vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0% 2%;
      gap: 5%;
      .btn{
        @media (max-width:480px) {
          font-size: .7rem;
          height: 5vh;
        }
        width: 40%;
        border: none;
        border-radius: 5px;
        height: 80%;
        cursor: pointer;
      }
      .active{
        background: #d30d0d;
        color: #fff;
      }
    }
    .thirdLayer{
      width: 100%;
      height: 9vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0% 2%;
      input{
        @media (max-width:480px) {
          font-size: .7rem;
          height: 5vh;
        }
        width: 45%;
        height: 80%;
        &:nth-child(2){
          display: ${props => props.ds};
        }
        transition: all .5s linear;
        &:focus{
          border: solid 2px #d30d0d;
          outline: none;
        }
      }
    }
    .fourthLayer{
      width: 100%;
      height: 9vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0% 2%;
      select{
        @media (max-width:480px) {
          font-size: .7rem;
          height: 5vh;
        }
        width: 45%;
        height: 80%;
        transition: all .5s linear;
        &:focus{
          border: solid 2px #d30d0d;
          outline: none;
        }
      }
    }
    .fifthLayer{
      width: 100%;
      height: 9vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0% 2%;
      select{
        @media (max-width:480px) {
          font-size: .7rem;
          height: 5vh;
        }
        width: 45%;
        height: 80%;
        transition: all .5s linear;
        &:focus{
          border: solid 2px #d30d0d;
          outline: none;
        }
      }
    }
    .sixthLayer{
      width: 100%;
      height: 9vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0% 2%;
      input{
        @media (max-width:480px) {
          font-size: .7rem;
          width: 100%;
        }
        padding-left: 2%;
        width: 80%;
        height: 80%;
        &:focus{
          border: solid 2px #d30d0d;
          outline: none;
        }
      }
    }
    .submit{
      @media (max-width:480px) {
        font-size: 1rem;
      }
      background: #d30d0d;
      border: none;
      margin-left: 10%;
      margin-top: 5%;
      border-radius: 5px;
      color: #fff;
      width: 80%;
      height: 8vh;
      font-size: 1.2vw;
      transition: all .2s linear;
      cursor: pointer;
      &:hover{
        background: #d30d0d82;
      }
    }
  }
`