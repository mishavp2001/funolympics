import React, { Component } from 'react';
import { Row, Col, Form, Button, Container, Anchor } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render() {
        return (
            <Container>
            <Row className="px-4 my-5">
                <Col><h1>Login</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Enter Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">Login &gt;&gt;</Button>&nbsp;   
                        <Link to='/register'><Button>Register</Button></Link>                       
                     
                    </Form>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default LoginPage;