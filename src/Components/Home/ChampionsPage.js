import React, { Component } from 'react';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';

class ChampionsPage extends Component {
    render() {
        return (
            <Container fluid className='px-5 my-5'>
                <Row style={{'marginTop': '6rem'}}>
                    <Col sm={5}>
          Natalie  - Gnut
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ChampionsPage;