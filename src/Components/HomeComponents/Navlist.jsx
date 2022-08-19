import React from 'react'
import { Link } from 'react-router-dom'

function Navlist({name,id,active,setSelected}) {
  return (
    <Link to='/' className={active ? 'linkss active' : 'linkss'} onClick={()=>setSelected(id )}>
        {name}
    </Link>
  )
}

export default Navlist