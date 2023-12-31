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
                <Navbar.Brand className="brand" href="/">
                    FunOlympics
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/events'>Events</Nav.Link>
                        <Nav.Link href="/games">Games</Nav.Link>
                        <Nav.Link href="/champions">Champions</Nav.Link>
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