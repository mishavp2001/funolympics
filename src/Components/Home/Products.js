import React, { Component } from 'react';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';
import { useAuthenticator } from '@aws-amplify/ui-react';

function Profile(props) {
    const { user } = useAuthenticator((context) => [context.user]);

    return (
        <Container fluid className='px-5 my-5 generic-container'>
            <Row style={{ 'marginTop': '6rem' }}>
                <Col>
                    <h2>Check out our products page:</h2>
                    <img src='/img/olympics.jpeg' />    
                </Col>
            </Row>
            {user?.attributes?.email} please add you default payment

        </Container>
    );
}

export default Profile;