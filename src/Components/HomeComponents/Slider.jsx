import React from 'react'
import styled from 'styled-components'
import {BsArrowRight} from 'react-icons/bs'
function Slider() {
  return (
    <ParentSlide>
        <Slide>
            <Cards><p>Abuja</p><BsArrowRight/><p>Lagos: ₦70,000</p></Cards>
            <Cards><p>Sokoto</p><BsArrowRight/><p>Abuja: ₦70,000</p></Cards>
            <Cards><p>Kano</p><BsArrowRight/><p>Bauchi: ₦70,000</p></Cards>
            <Cards><p>Uyo</p><BsArrowRight/><p>Lagos: ₦70,000</p></Cards>
            <Cards><p>Calabar</p><BsArrowRight/><p>Abuja: ₦70,000</p></Cards>
            <Cards><p>Owerri</p><BsArrowRight/><p>Lagos: ₦70,000</p></Cards>
            <Cards><p>Kaduna</p><BsArrowRight/><p>Lagos: ₦70,000</p></Cards>
            <Cards><p>Abuja</p><BsArrowRight/><p>Kano: ₦70,000</p></Cards>
            <Cards><p>Abuja</p><BsArrowRight/><p>Ilorin: ₦70,000</p></Cards>
            <Cards><p>PHC</p><BsArrowRight/><p>Lagos: ₦70,000</p></Cards>
        </Slide>
    </ParentSlide>
  )
}

export default Slider
const ParentSlide = styled.div`
    width: 100%;
    background: #d30d0d;
    height: 10vh;
    position: fixed;
    bottom: 0;
    z-index:99999;
`
const Slide = styled.div`
    width: max-content;
    height: 10vh;
    bottom: 0;
    display: flex;
    overflow: auto;
    animation: sliding infinite 10s Linear;
    @keyframes sliding {
        0%{
            transform: translateX(0);
        }
        100%{
            @media (max-width:480px) {
                transform: translateX(-1900px);
            }
            transform: translateX(-900px);
        }
    }
`
const Cards = styled.div`
    width: 200px !important;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #fff;
`