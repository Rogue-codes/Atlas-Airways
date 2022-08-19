import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Bag, Mobile, Priviledge, QS } from './tabData'
import TabOptions from './TabOptions'
const data=[
    {
        id:'priviledge',
        title:"Priviledge Club"
    },
    {
        id:'mobile',
        title:"Mobile App"
    },
    {
        id:'bagg',
        title:"New Baggage Allowwance"
    },
    {
        id:'suit',
        title:"Qsuite"
    }
]

function Tab() {
    const [Tabss, setTabbs] = useState([])
    const [selected, setSelected] = useState('priviledge')

    useEffect(()=>{
        switch (selected) {
            case 'priviledge':
                setTabbs(Priviledge)
                break

            case 'mobile':
                setTabbs(Mobile)
                break

            case 'bagg':
                setTabbs(Bag)
                break 
                
            case 'suit':
                setTabbs(QS)
                break 

                default:
                    setTabbs(Priviledge)

         }
    },[selected])
    
  return (
    <TabComponent>
        <div className='topp'>
            {
                data.map((item)=>(
                    <TabOptions name={item.title} active={selected === item.id} id={item.id} setSelected={setSelected}/>
                ))
            }
        </div>
        <div className="bottommm">
            {Tabss.map((item)=>(<img src={item.img} alt="" />))}
            {
                Tabss.map((item)=>(
                    <div className="cardd">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>{item.btn}</button>
                    </div>
                ))
            }
        </div>
    </TabComponent>
  )
}

export default Tab

const TabComponent =styled.div`
    margin-top: 5%;
    width: 100%;
    height: auto;
    .topp{
        @media (max-width:480px) {
            overflow-x: auto;
            padding: 1%;
        }
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: center;
        gap: 5%;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        .tabs{
            @media (max-width:480px) {
                font-size: .8rem;
            }
            list-style-type: none;
            cursor: pointer;
            font-weight: 500;
        }
        .active{
            color: #d30d0d;
            border-bottom: 2px solid #d30d0d;
        }
    }
    .bottommm{
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        padding: 2%;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .cardd{
            @media (max-width:480px) {
                width: 100%;
            }
            width: 40%;
            height: auto;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            padding: 3%;
            gap: 5%;
            color: white;
            background: #0000009d;
            z-index: 999;
            h2{
                @media (max-width:480px) {
                    font-size: 2rem;
                }
                font-size: 2vw;
            }
            p{
                @media (max-width:480px) {
                    font-size: 1.2rem;
                }
                font-size: 1.5vw;
            }
            button{
                @media (max-width:480px) {
                    width: 50%;
                    margin-top: 5%;
                }
                width: 30%;
                height: 8vh;
                margin-top: 3%;
                background: transparent;
                border: 1px solid #fff;
                color: #fff;
                border-radius: 12px;
                cursor: pointer;transition: all .5s linear;
                &:hover {
                    background: #d30d0d;
                }
            }
        }
    }
`