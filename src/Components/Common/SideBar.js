import React from 'react';
import '../../App.css'
import { Container, Nav, Row, Col} from 'react-bootstrap';

const SideBar = props => {
    return (
        <Container>
        <Row style={{}}>
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