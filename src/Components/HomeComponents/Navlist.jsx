import React from 'react'

function Navlist({name,id,active,setSelected}) {
  return (
    <a href="#" className={active ? 'linkss active' : 'linkss'} onClick={()=>setSelected(id )}>
        {name}
    </a>
  )
}

export default Navlist