import React, { Component } from 'react';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';

class BasketballPage extends Component {
    render() {
        return (
            <Container fluid className='px-5 my-5 generic-container'>
                <Row style={{'marginTop': '6rem'}}>
                    <Col sm={5}>
          Basketball
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BasketballPage;