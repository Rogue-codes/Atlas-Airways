import React from 'react'

function TabOptions({name,id,active,setSelected}) {
  return (
    <li className={active ? 'tabs active' : 'tabs'} onClick={()=>setSelected(id)}>
        {name}
    </li>
  )
}

export default TabOptions