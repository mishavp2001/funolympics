import React, { Component } from 'react';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <Container fluid className='px-1 my-1 color-container'>
                <Row  className='font-weight-light' style={{'marginTop': '1rem'}}>
                    <Col sm={10}>
                        <h1>Welcome to FunOlympics site!</h1>
                        <p>
                            The idea of the site comes from my daughter saying to me if can make soccer practice to be FUN.
                            Kids usually don't like to follow tediuos practice rules and repeat the same thing,
                            but GAMEFICATION of the skils to be mastered makes it mpore productive and more FUN! 
                            This site contains everything for kids to be active and love sports!
                        </p>
                        <img src='/img/olympics.jpeg' />

                        <h2>
Our Goal is provide FUN ideas and help facilitate events so kids learn new skils and LOVE to practice!
                        </h2>
                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;