import {Container, Nav,Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className= "navbar-brand" to = "/">Online Shopping Store</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className = "nav-link" to="/">Users</NavLink>
            <NavLink className = "nav-link" to="/products">Products</NavLink>
            <NavLink className = "nav-link" to="/orders">Orders</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;