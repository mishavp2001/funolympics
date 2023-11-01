import React from 'react';
import '../../App.css'
import { Container, Nav, Row, Col} from 'react-bootstrap';
import { Divider } from '@aws-amplify/ui-react';

const SideBar = props => {
    return (
        <Container className='side-bar px-4 py-4'>
        <Row>
        <Col sm={1}>
        <Nav className='ms-md-auto'>
            <h5>Links</h5>
            <Nav.Link href='/soccer'>Soccer</Nav.Link>
            <Nav.Link href='/basketball'>Basketball</Nav.Link>
            <Nav.Link href='/volleyball'>Volleyball</Nav.Link>
            <Nav.Link href='/tennis'>Tennis</Nav.Link>
            <Divider />
            <h5>Events</h5>
            <Divider />
            <Nav.Link href='/events'>Event1</Nav.Link>
            <Nav.Link href='/events'>Event2</Nav.Link>
            <Nav.Link href='/events'>Event3</Nav.Link>


        </Nav>
        </Col>
        </Row>
        </Container>
    );
};

SideBar.propTypes = {
    
};

export default SideBar;