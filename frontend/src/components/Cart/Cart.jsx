import React, {useState} from 'react'
import './Cart.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [show, setShow] = useState(false);

  return (
    <div className='cart-container'>
        <div className="cart-left">
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
        <div className="cart-right">
            <div className="cart-wrapper">
                <h2 className="righttitle">
                    CART TOTAL
                </h2>
                <div className="totaltext">
                    <b className="totaltexttitle">Subtotal:</b>Rs.900
                </div>
                <div className="totaltext">
                    <b className="totaltexttitle">Discount:</b>Rs.0
                </div>
                <div className="totaltext">
                    <b className="totaltexttitle">Total:</b>Rs.900
                </div>
                <Link to='/'>
                <button className="cartbutton" onClick={() => setShow(true)}>CHECKOUT NOW!</button>
                </Link>
                <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg='warning'>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Wohhooo</strong>
            <small>0 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, Order Placed!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        {/* <Button onClick={() => setShow(true)}>Show Toast</Button> */}
      </Col>
    </Row>
            </div>
        </div>
    </div>
  )
}

export default Cart