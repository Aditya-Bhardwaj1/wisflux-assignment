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
                <div className="size" onClick={()=>setSize(0)}>
                    <img src={require('../Images/size.png')} layout="fill" alt='size' height="30" width="30"/>
                    <span className="number">Small</span>
                </div>
                <div className="size"  onClick={()=>setSize(1)}>
                    <img src={require('../Images/size.png')} layout="fill" alt='size' height="40" width="40"/>
                    <span className="number">Medium</span>
                </div>
                <div className="size"  onClick={()=>setSize(2)}>
                    <img src={require('../Images/size.png')} layout="fill" alt='size' height="50" width="50"/>
                    <span className="number">Large</span>
                </div>
            </div>
            <h3 className='choose'> Choose additional ingredients</h3>
            <div className="ingredients">
                <div className="option">
                    <input type="checkbox" id='double' name='double' className="checkbox" />
                    <label htmlFor='double'>Double Ingredients</label>
                </div>
                <div className="option">
                    <input type="checkbox" id='cheese' name='cheese' className="checkbox" />
                    <label htmlFor='cheese'>Extra Cheese</label>
                </div>
                <div className="option">
                    <input type="checkbox" id='spicy' name='spicy' className="checkbox" />
                    <label htmlFor='spicy'>Spicy Sauce</label>
                </div>
                <div className="option">
                    <input type="checkbox" id='garlic' name='garlic' className="checkbox" />
                    <label htmlFor='garlic'>Garlic Sauce</label>
                </div>
            </div>
            <div className="add">
                <input type="number" defaultValue={1} className="quantity" />
                <button className="button">Add to cart</button>
            </div>
  
        </div>

    </div>
  )
}

export default Product