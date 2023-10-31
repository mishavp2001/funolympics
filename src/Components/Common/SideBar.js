import React from 'react';
import '../../App.css'
import { Container, Nav, Row, Col} from 'react-bootstrap';

const SideBar = props => {
    return (
        <Container className='side-bar px-4 py-4'>
        <Row>
        <Col sm={1}>
        <Nav className='ms-md-auto'>
            <Nav.Link href='/soccer'>Soccer</Nav.Link>
            <Nav.Link href='/basketball'>Basketball</Nav.Link>
            <Nav.Link href='/volleyball'>Volleyball</Nav.Link>
            <Nav.Link href='/tennis'>Tennis</Nav.Link>
        </Nav>
        </Col>
        </Row>
        </Container>
    );
};

SideBar.propTypes = {
    
};

export default SideBar;