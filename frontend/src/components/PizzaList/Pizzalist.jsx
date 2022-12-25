import React from 'react'
import PizzaCard from './PizzaCard'
import './Pizzalist.css'

const Pizzalist = () => {
  return (
    <div className='list-container'>
        <h1 className='list-title'> Pizzalist</h1>
        <p className='list-desc'>
            lorem ipsum dolor sit amet,
        </p>
        <div className="wrapper">
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    
    </div>
  )
}

export default Pizzalist