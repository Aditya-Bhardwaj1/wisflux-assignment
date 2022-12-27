import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navb.css';

function Navb() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  to="/"><Link to='/' >Pizza Restaurant</Link></Navbar.Brand>
          <Nav className="me-auto">
            
            <Link to="/product" className='linkto'>Product</Link>
            <Link to="/cart" className='linkto'>cart</Link>
            <Link to="/pastorder" className='linkto'>Past Orders</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;