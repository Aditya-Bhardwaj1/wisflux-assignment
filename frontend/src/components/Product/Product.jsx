import React, {useState} from 'react'
import './Product.css'

const Product = () => {

    const [size, setSize] = useState(0);
    const pizza= {
        id: 1,
        img: '../Images/pizza.png',
        name: "Campagnola",
        price: [150, 170, 190],
        desc: "Lorem ipsum shit done sit amet , you can do it"
    }

  return (
    <div className='product-container'>
        <div className='left'>
            <div className="img-container">
                <img src={require('../Images/pizza.png')} alt='pizza' height="500" width="500"/>
            </div>
        </div>
        <div className='right'>
            <h1 className='product-pizza-title'>{pizza.name}</h1>
            <span className='product-price'>Rs{pizza.price[size]}</span>
            <p className='product-pizza-desc'>{pizza.desc}</p>
            <h3 className='choose'> Choose the size</h3>
            <div className="sizes">
                <div className="size">
                    <img src={require('../Images/size.png')} layout="fill" alt='size' height="30" width="30"/>
                    <span className="number">Small</span>
                </div>
                <div className="size">
                    <img src={require('../Images/size.png')} layout="fill" alt='size' height="40" width="40"/>
                    <span className="number">Medium</span>
                </div>
                <div className="size">
                    <img src={require('../Images/size.png')} layout="fill" alt='size' height="50" width="50"/>
                    <span className="number">Large</span>
                </div>
            </div>
  
  
        </div>

    </div>
  )
}

export default Product