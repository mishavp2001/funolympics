import React, { Component } from 'react';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';

class ChampionsPage extends Component {
    render() {
        return (
            <Container fluid className='px-5 py-5 champions-container'>
                <Row>
                    <Col sm={5}>
          Natalie  - Gnut
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ChampionsPage;