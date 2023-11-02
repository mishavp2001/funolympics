import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, View } from '@aws-amplify/ui-react';

const NavigationBar = props => {

    const { route, user, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const navigate = useNavigate();

    function handleLogOut() {
        signOut();
        //navigate('/login');
    }


    return (
        <header>
            <Navbar variant="dark" expand="lg" bg='info' fixed='top'>
                <Navbar.Brand href="/">
                <span style={{"color":"#FF0000"}}>F</span>
                <span style={{"color":"rgb(137 16 119)"}}>u</span>
                <span style={{"color":"rgb(95 128 216)"}}>n</span>
                <span style={{"color":"rgb(14 56 147)"}}>O</span>
                <span style={{"color":"rgb(1 44 48)"}}>l</span>
                <span style={{"color":"rgb(36 92 121)"}}>y</span>
                <span style={{"color":"rgb(219 20 98)"}}>m</span>
                <span style={{"color":"#66CC66"}}>p</span>
                <span style={{"color":"rgb(148 10 157)"}}>i</span>
                <span style={{"color":"rgb(22 119 22)"}}>c</span>
                <span style={{"color":"#FF0000"}}>s</span> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/events'>Events</Nav.Link>
                        <Nav.Link href="/champions">Champions</Nav.Link>
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
                        <Button variant="secondary">Search</Button>
                    </Form>
                    <Nav className='ms-md-auto login-nav'>
                        {route === 'authenticated' ?
                            <NavDropdown title={user.attributes.email} id="email">
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                            </NavDropdown> :
                            <Nav.Link href='/login'>Login</Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </header>

    );
};

NavigationBar.propTypes = {

};

export default NavigationBar;