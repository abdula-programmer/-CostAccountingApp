import React from 'react'
import './card.css';
const Card = ({className, children}) => {
   let clasess = 'card ' + className;

  return (
    <div className={clasess}>
      {children}
    </div>
  )
}


export default Card;