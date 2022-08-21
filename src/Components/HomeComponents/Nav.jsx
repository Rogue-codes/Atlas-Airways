import React, { useState } from 'react'
import styled from 'styled-components'
import Navlist from './Navlist'
import { useTransition, animated } from 'react-spring'
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom'


function Nav() {
  const links = [
 {  
    id:'dest',
    name:'DESTINATIONS & ONBOARD'
  },
  {  
    id:'help',
    name:'HELP'
  },
  {  
    id:'book',
    name:'BOOK A FLIGHT'
  },
  {  
    id:'man',
    name:'MANAGE BOOKING'
  },
  {  
    id:'info',
    name:'INFORMATION'
  }
  ]
  const [selected,setSelected] = useState('dest')

  const [showMenu, setShowMenu]= useState(false)

  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 200,
    // config: config.molasses,
    // onRest: () => set(!show),
})

const menuTransitions = useTransition(showMenu, {
  from: { opacity: 0, transform: "translateX(-100%)"},
  enter: { opacity: 1, transform: "translateX(0%)" },
  leave: { opacity: 0, transform: "translateX(-100%)" },
  reverse: showMenu,
  delay: 200,
    // config: config.molasses,
  // onRest: () => set(!show),
})
  return (
    <NavBar>
      <Logo>
        ATLAS<span>airways</span>
      </Logo>

      
          <Links>
          {
            links.map((item)=>(
              <Navlist active={selected === item.id} name={item.name} id={item.id} setSelected={setSelected}/>
            ))
          }
        </Links>


      <Right>
        <button>Log In</button>
      </Right>

      <Menu className='menu' onClick={()=> setShowMenu(!showMenu)}/>

      {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='firstAni' onClick={()=> setShowMenu(false)}>

            </animated.div>
            )
        }

        {
            menuTransitions(
            (styles, item) => item && <animated.div style={styles} className='animate'>
              {
                links.map((item)=>(
                  <Link to='/' onClick={()=> setShowMenu(false)}>{item.name}</Link>
                ))
              }
            </animated.div>
            )
      }
      
    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  position: fixed;
  top: 0%;
  background: #fff;
  z-index:999999;
  @media (max-width:480px) {
    padding: 2%;
    height: 10vh;
  }
  .menu{
    @media (max-width:480px) {
      display: block;
      font-size: 3rem;
    }
    display: none;
  }
  .firstAni{
      @media (max-width:480px) {
      display: block;
      }
      display: none;
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 90;
      background-color: #010214a6;
  }
  .animate{
    @media (max-width:480px) {
      display: block;
    }
    display: none;
    width: 80%;
    box-shadow: 2px 2px 4px #010214a6;
    min-height: 1000vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
    background-color: white;
    a{
        display: block;
        color: #d30d0d;
        margin-top: 5%;
        padding: 5%;
        margin-bottom: 9%;
        border-bottom: 1px solid #fff;
        text-decoration: none;
        font-size: 1.2rem;
    }
  }    

`
const Logo = styled.div`
  @media (max-width:480px) {
    font-size: 2rem;
    width: 70%;
    justify-content: flex-start;
  }
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  font-weight: 800;
  font-family: 'Aboreto', cursive;
  span{
    font-family: 'Spectral', serif;
    color: #d30d0d;
  }
`

const Links = styled.div`
  @media (max-width:480px) {
      display: none;
  }
  width: 70%!important;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .linkss{
    text-decoration: none;
    color: #000;
    font-family: 'Spectral', serif;
    font-size: 1vw;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s linear;
    &:hover{
      color: #d30d0d;
    }
  }
  .active{
    border-bottom: 5px solid #d30d0d;
    color: #d30d0d;
  }
`
const Right = styled.div`
  @media (max-width:480px) {
      display: none;
  }
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    width: 80%;
    height: 6vh;
    background: #d30d0d;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    font-family: 'Spectral', serif;
    transition: all .5s linear;
    cursor: pointer;
    &:hover{
      background: #d30d0d7c;
    }
  }
`