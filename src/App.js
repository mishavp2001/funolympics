import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavigationBar from './Components/Common/NavigationBar';
import FooterBar from './Components/Common/FooterBar ';
import HomePage from './Components/Home/HomePage';
import SoccerPage from './Components/Home/SoccerPage';
import BasketballPage from './Components/Home/BasketballPage';
import VolleyballPage from './Components/Home/VolleyballPage';
import TennisPage from './Components/Home/TennisPage';
import SideBar from './Components/Common/SideBar';
import LoginPage from './Components/Auth/LoginPage';
import RegisterPage from './Components/Auth/RegisterPage';
import ChampionsPage from './Components/Home/ChampionsPage';

import { Route, Routes } from 'react-router-dom';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';

import { Amplify } from 'aws-amplify';
import { Authenticator, useTheme, Text  } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import './App.css';
import '@aws-amplify/ui-react/styles.css';
import EventsPage from './Components/Home/EventsPage';
Amplify.configure(awsExports);

function App() {
  const components = {

  } 
  return (
    <Authenticator loginMechanisms={['email']} components={components}>
    {({ signOut, user }) => (
      <div>
      <NavigationBar  logOut={signOut}/>
      <Container fluid className='px-5 my-5'>
                <Row >
                    <Col sm={10}>
                      <Routes>
                      <Route path='*' element = {<HomePage/>} />
                      <Route path='/' exact={true} element = {<HomePage/>} />
                      <Route path='/login' element = {<LoginPage/>} />
                      <Route path='/register' element = {<RegisterPage/>} />
                      <Route path='/soccer' element = {<SoccerPage/>} />
                      <Route path='/basketball' element = {<BasketballPage/>} />
                      <Route path='/volleyball' element = {<VolleyballPage/>} />
                      <Route path='/tennis' element = {<TennisPage/>} />
                      <Route path='/events' element = {<EventsPage/>} />
                      <Route path='/champions' element = {<ChampionsPage/>} />
                    </Routes>
                    </Col>
                    <Col sm={2}>
                       <SideBar />    
                    </Col>
                </Row>
            </Container>
     <FooterBar />
      </div>
    )}
    </Authenticator>
  );
}

export default App;