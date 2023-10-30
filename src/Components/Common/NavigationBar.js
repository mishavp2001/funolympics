import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form , FormControl, Button}  from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = props => {
    const handleLogOut = () => {
       props.logOut();     
    }

    return (
        <header>
            <Navbar expand="lg" bg='light' fixed='top'>
                    <Navbar.Brand href="/">FunOlympics.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/champions">Champions</Nav.Link>
                            <Nav.Link href='/events'>
                                    Events
                            </Nav.Link>  
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Soccer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Basketball
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Voleyball</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/sell'>
                                   Sell Your Products
                                </NavDropdown.Item>                           
                            </NavDropdown> 
                        </Nav>
                        <Form className='d-flex'>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        </Form>
                        <Nav className='ms-md-auto'>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                        <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>                       
                        </Nav>

                    </Navbar.Collapse>
            </Navbar>
        </header>

    );
};

NavigationBar.propTypes = {

};

export default NavigationBar;