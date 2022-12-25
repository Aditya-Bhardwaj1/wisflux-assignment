import React from 'react'
import './PizzaCard.css'

const PizzaCard = () => {
  return (
    <div className='pizza-container'>
        <img src={require('../Images/pizza.png')} alt='pizza' width="300" height ="300"/>
        <h1 className='pizza-title'>Fioria Di Zucca</h1>
        <span className='pizza-price'>Rs. 150</span>
        <p className='pizza-desc'>
            Lorem iopsu dolor sut amet consetfcs saaddcsdf elit.
        </p>
    </div>
  )
}

export default PizzaCard