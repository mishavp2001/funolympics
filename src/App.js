import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useEffect } from 'react';
import NavigationBar from './Components/Common/NavigationBar';
import FooterBar from './Components/Common/FooterBar ';
import HomePage from './Components/Home/HomePage';
import SoccerPage from './Components/Home/SoccerPage';
import BasketballPage from './Components/Home/BasketballPage';
import VolleyballPage from './Components/Home/VolleyballPage';
import TennisPage from './Components/Home/TennisPage';
import {Login} from './Components/Auth/Login';
import ChampionsPage from './Components/Home/ChampionsPage';
import Profile from './Components/Home/Profile';
import Games from './Components/Home/Games';
import Privacy from './Components/Home/Privacy';

import { Route, Routes } from 'react-router-dom';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';

import { Amplify, AuthModeStrategyType, Auth, Storage } from 'aws-amplify';
import { Authenticator, useTheme, Text  } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import './App.css';
import '@aws-amplify/ui-react/styles.css';
import EventsPage from './Components/Home/EventsPage';
import { RequireAuth } from './Components/Auth/RequireAuth';
import { Layout } from './Components/Common/Layout';

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }}
);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const assessLoggedInState = () => {
      Auth.currentAuthenticatedUser()
          .then(sess => {
              console.log('logged in');
              setLoggedIn(true);
          })
          .catch(() => {
              console.log('not logged in');
              setLoggedIn(false);
          });
  };
  useEffect(() => {
      assessLoggedInState();
  }, []);

  const signOut = async () => {
      try {
          await Auth.signOut();
          setLoggedIn(false);
      } catch (error) {
          console.log('error signing out: ', error);
      }
  };
  const components = {

  } 
  return (
    <Authenticator.Provider>
      <div>
      <NavigationBar signOut={signOut} loggedIn={loggedIn}/>
      <Container fluid className='my-5 app-body'>
                <Row >
                    <Col sm={12}>
                      <Routes>
                      <Route path="/" element={<Layout />}>
                        <Route index path='/' exact={true} element = {<HomePage/>} />
                        <Route path='/login' element = {<Login/>} />
                        <Route path='/profile' element = {<Profile />} />
                        <Route path='/games' element = {<Games />} />
                        <Route path='/privacy' element = {<Privacy />} />
                        <Route path='/soccer' element = {<SoccerPage/>} />
                        <Route path='/basketball' element = {<BasketballPage/>} />
                        <Route path='/volleyball' element = {<VolleyballPage/>} />
                        <Route path='/tennis' element = {<TennisPage/>} />
                        <Route path='/events' element = {<EventsPage/>} />
                        <Route path='/champions' element = {<RequireAuth><ChampionsPage/></RequireAuth>} />
                      </Route>  
                  </Routes>
                  </Col>
                </Row>
      </Container>
      <FooterBar/>
      </div>
    </Authenticator.Provider>
  );
}

export default App;