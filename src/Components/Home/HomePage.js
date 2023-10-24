import React, { Component } from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <Container fluid className='px-5 my-5'>
                <Row style={{'margin-top': '6rem'}}>
                    <Col sm={10}>
                        <h1 className='font-weight-light'>Welcome to our site!</h1>
                        <p className='mt-4'>
                            Context of the site
                        </p>
                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;