import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css'
import { Container, Image, Col, Row } from 'react-bootstrap';

const FooterBar = props => {
    return (
        <footer className='py-5 my-5'>
            <Container fluid className='px-4'>
                    <span className='text-end'>
                        &copy; 2023
                        <Image width='30px' src='/img/logo.png' fluid />
                    </span>
            </Container>    
        </footer>
    );
};

FooterBar.propTypes = {
    
};

export default FooterBar;