import React from 'react'

const Menu = ({mtext,className}) => {
  return (
    <ul>
        <li className={`${className}`}>{mtext}</li>
    </ul>
  )
}

export default Menu