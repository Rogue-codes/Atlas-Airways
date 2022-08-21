import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

function NewsLetter() {
    useEffect(()=>{
        Aos.init({duration : 3000})
    },[])
  return (
    <Container>
        <Card data-aos="zoom-in">
            <form action="">
                <h1>Never miss an offer</h1>
                <p>Subscribe and be the first to receive our exclusive offers.</p> <br />
                <input type="email" name="" id="" required  placeholder='Email Address' /><br />
                <span>
                    <input type="checkbox" name="" id=""/>
                    Yes, i would love to recieve news and offers from Atlas Airways
                </span>
                <button>Subscribe</button>
            </form>
        </Card>
    </Container>
  )
}

export default NewsLetter

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    width: 90%;
    margin: auto;
    height: 90%;
    padding: 2%;
    border-radius: 12px;
    background: linear-gradient(90deg, #d30d0d65 0%, #d30d0d30 32%, #d30d0d 100%),url('/news.webp');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    form{
        @media (max-width:480px) {
            width: 100%;
        }
        width: 60%;
        height: auto;
        border-radius: 8px;
        background: #0000006c;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 2%;
        h1{
            @media (max-width:480px) {
                font-size: 1.2rem;
            }
            font-size: 2vw;
        }
        p{
            @media (max-width:480px) {
                font-size: 1rem;
            }
            font-size: 1.5vw;
        }
        input[type='email']{
            @media (max-width:480px) {
                width: 100%;
                font-size: .7rem;
                height: 8vh;
            }
            padding-left: 2%;
            width: 80%;
            height: 10vh;
            display: block;
            font-size: 1rem;
            &:focus{
                outline: none;
            }
        }
        button{
            @media (max-width:480px) {
                font-size: 1rem;
                width: 50%;
            }
            width: 30%;
            height: 8vh;
            border-radius: 20px;
            font-size: 1.5vw;
            margin-top: 5%;
            border: none;
            cursor: pointer;
            color: #d30d0d;
            transition: all 0.5s linear;
            &:hover{
                background: #d30d0d;
                color: #fff;
            }
        }
        span{
            @media (max-width:480px) {
                font-size: .8rem;
            }
            display: flex;
            gap: 2%;
            input[type='checkbox']{
                width: 20px;
                height: 20px;
            }
        }
    }
`