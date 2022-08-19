import React from 'react'

function Button({name,id,active,setSelected}) {
  return (
    <button className={active ? 'btn active' : 'btn'} onClick={()=>setSelected(id )}>
        {name}
    </button>
  )
}

export default Button