import React from 'react';
import '../../App.css'
import { Container, Nav, Row, Col} from 'react-bootstrap';
import { Divider } from '@aws-amplify/ui-react';

const SideBar = props => {
    return (
        <Container className='side-bar px-3 py-3'>
        <Row>
        <Col>
        <Nav>
            <h4>Popular Games</h4>
            <Nav.Link href='/soccer'>Soccer</Nav.Link>
            <Nav.Link href='/basketball'>Basketball</Nav.Link>
            <Nav.Link href='/volleyball'>Volleyball</Nav.Link>
            <Nav.Link href='/tennis'>Tennis</Nav.Link>
            <Divider />
            <h4>Latest Events</h4>
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