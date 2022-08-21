import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

function LetFly() {
    useEffect(()=>{
        Aos.init({duration : 3000})
    },[])
  return (
    <Container>
        <div className="toops">
            <h1>Let's go places together</h1>
            <p>Discover the latest offers and news and start planning your next trip with us.</p>
        </div>
        
        <div className="bottomsss">
            <div className="item1" data-aos="fade-right">
                <div className="heder">
                    <img src="/asaba.jpg" alt="" />
                </div>
                <div className="foter">
                    <h2>Immerse yourself in Eastern culture</h2>
                    <p>Fly to <strong>Enugu, Umuahia, Owerri </strong> and many more destinations with our amazing offers.</p>
                    <button>Book now</button>
                </div>
            </div>
            <div className="item2" data-aos="zoom-in">
                <div className="left">
                    <img src="/zuma.jpg" alt="" />
                </div>
                <div className="right">
                    <p><strong>Witness the might of Zuma</strong></p>
                    <p className='sm'>Fly to Abuja</p>
                    <button>Book now</button>
                </div>
            </div>

            <div className="item3" data-aos="zoom-in">
                <div className="left">
                    <img src="/water.webp" alt="" />
                </div>
                <div className="right">
                    <p><strong>Take a tour across Nigeria</strong></p>
                    <p className='sm'>we have a list of Amazing places you could visit</p>
                    <button>Discover now</button>
                </div>
            </div>

            <div className="item4" data-aos="zoom-in">
                <div className="left">
                    <img src="/hotel.webp" alt="" />
                </div>
                <div className="right">
                    <p><strong>World class Comfort</strong></p>
                    <p className='sm'>Discover worldwide exclusives, luxury Hotels and Resturants</p>
                    <button>Discover now</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default LetFly

const Container = styled.div`
    width: 100%;
    height: auto;
    font-family: 'Spectral', serif;
    margin-top: 5%;
    background: #f2f3fa;
    .toops{
        width: 100%;
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 5%;
        color: #d30d0d;
        font-family: 'Spectral', serif;
        h1{
            @media (max-width:480px) {
                font-size: 2rem;
            }
            font-size: 3vw;
        }
        p{
            font-weight: 800;
        }
    }
    .bottomsss{
        @media (max-width:480px) {
            display: flex;
            flex-direction: column;
            height: auto;
        }
        width: 100%;
        height: auto;
        display: grid;
        grid-template-rows: 30%;
        grid-template-columns: 50%;
        gap: 20px;
        padding: 5%;
        .item1{
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 4;
            border-radius: 5px;
            background: #fff;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            .heder{
                width: 100%;
                height: 50%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .foter{
                width: 100%;
                height: 50%;
                padding: 2%;
                h2{
                    @media (max-width:480px) {
                        font-size: 1.5rem;
                    }
                    font-size: 2vw;
                }
                p{
                    @media (max-width:480px) {
                        font-size: 1.2rem;
                    }
                    font-size: 1.7vw;
                }
                button{
                    margin-top: 5%;
                    height: 8vh;
                    width: 50%;
                    background: #d30d0d;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
        .item2{
            @media (max-width:480px) {
                flex-direction: column;
            }
            grid-column-start: 2;
            grid-column-end: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            background: #fff;
            .left{
                @media (max-width:480px) {
                    width: 100%;
                }
                width: 50%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .right{
                @media (max-width:480px) {
                    width: 100%;
                }
                width: 50%;
                height: 100%;
                padding: 2%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5%;
                p{
                    @media (max-width:480px) {
                        font-size: 1rem;
                    }
                    font-size: 1.5vw;
                }
                .sm{
                    @media (max-width:480px) {
                        font-size: .8rem;
                    }
                    font-size: 1vw;
                }
                button{
                    width: 50%;
                    height: 6vh;
                    margin-top: 2%;
                    background: #d30d0d;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
        .item3{
            @media (max-width:480px) {
                flex-direction: column;
            }
            grid-column-start: 2;
            grid-column-end: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            background: #fff;
            .left{
                @media (max-width:480px) {
                    width: 100%;
                }
                width: 50%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .right{
                @media (max-width:480px) {
                    width: 100%;
                }
                width: 50%;
                height: 100%;
                padding: 2%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5%;
                p{
                    @media (max-width:480px) {
                        font-size: 1rem;
                    }
                    font-size: 1.5vw;
                }
                .sm{
                    @media (max-width:480px) {
                        font-size: .8rem;
                    }
                    font-size: 1vw;
                }
                button{
                    width: 50%;
                    height: 6vh;
                    margin-top: 2%;
                    background: #d30d0d;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
        .item4{
            @media (max-width:480px) {
                flex-direction: column;
            }
            grid-column-start: 2;
            grid-column-end: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            background: #fff;
            .left{
                @media (max-width:480px) {
                    width: 100%;
                }
                width: 50%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .right{
                @media (max-width:480px) {
                    width: 100%;
                }
                width: 50%;
                height: 100%;
                padding: 2%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5%;
                p{
                    @media (max-width:480px) {
                        font-size: 1rem;
                    }
                    font-size: 1.5vw;
                }
                .sm{
                    @media (max-width:480px) {
                        font-size: 1rem;
                    }
                    font-size: 1vw;
                }
                button{
                    width: 50%;
                    height: 6vh;
                    margin-top: 2%;
                    background: #d30d0d;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
    }

`