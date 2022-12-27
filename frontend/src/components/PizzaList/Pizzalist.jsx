import React from 'react'
import PizzaCard from './PizzaCard'
import './Pizzalist.css'
import { Link } from 'react-router-dom';

const Pizzalist = () => {
  return (
    <div className='list-container'>
        <h1 className='list-title'> Pizzalist</h1>
        <p className='list-desc'>
            Find the finest of pizza here
        </p>
        <div className="wrapper">
            <Link to='/product'><PizzaCard/></Link>
            <Link to='/product'><PizzaCard/></Link>
            <Link to='/product'><PizzaCard/></Link>
            <Link to='/product'><PizzaCard/></Link>
            <Link to='/product'><PizzaCard/></Link>
            <Link to='/product'><PizzaCard/></Link>
            <Link to='/product'><PizzaCard/></Link>
        </div>
    
    </div>
  )
}

export default Pizzalist