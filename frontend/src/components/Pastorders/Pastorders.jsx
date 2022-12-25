import React from 'react'
import './Pastorder.css'

const Pastorders = () => {
  return (
    <div className='past-container'>
        <div className="past-left">
        <table className="table">
                <tr className="tr">
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div className="cartimg-container">
                            <img src={require('../Images/pizza.png')} width='100' height='100'  alt='pizza' objectFit='cover'/>
                        </div>
                    </td>
                    <td>
                        <span className="name">CORALZO</span>
                    </td>
                    <td>
                        <span className="extras">Double ingredient, spicy sauce</span>
                    </td>
                    <td>
                        <span className="price">Rs.150</span>
                    </td>
                    <td>
                        <span className="quantity">2</span>
                    </td>
                    <td>
                        <span className="total">Rs.300</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="cartimg-container">
                            <img src={require('../Images/pizza.png')} width='100' height='100'  alt='pizza' objectFit='cover'/>
                        </div>
                    </td>
                    <td>
                        <span className="name">CORALZO</span>
                    </td>
                    <td>
                        <span className="extras">Double ingredient, spicy sauce</span>
                    </td>
                    <td>
                        <span className="price">Rs.150</span>
                    </td>
                    <td>
                        <span className="quantity">2</span>
                    </td>
                    <td>
                        <span className="total">Rs.300</span>
                    </td>
                </tr>
            </table>
        </div>
        <div className="past-right">

        </div>
    </div>

  )
}

export default Pastorders