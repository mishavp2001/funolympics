import React, { Component } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

class RegisterPage extends Component {
    render() {
        return (
            <Container>
            <Row className="px-4 my-5">
                <Col><h1>Register</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className='text-muted'>
                                We'll never share your email!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  minLength="8" placeholder="Enter Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formConfirm">
                            <Form.Label>Confirm</Form.Label>
                            <Form.Control type="password"  minLength="8" placeholder="Confirm Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">Register &gt;&gt;</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default RegisterPage;