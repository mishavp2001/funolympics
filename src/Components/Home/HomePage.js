import React from 'react';
import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';
import {Login} from '../Auth/Login';
import SideBar from '../Common/SideBar';
import Profile from './Profile'
import { useAuthenticator } from '@aws-amplify/ui-react';


function HomePage() {

    const AuthContext = useAuthenticator((context) => [context]);
debugger;
        return (
            <Container fluid className='px-1 home-container'>
                <Row className='font-weight-light'>
                    <Col>
                        <h1>Welcome to FunOlympics!</h1>
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
                            
                        Plan your own Olympic Games!
Hosting a Kid Olympics can be a great way to get kids in your school or neighborhood up and moving. Kid Olympics are a great idea for:
* School field days
* Block parties
* Classroom projects
* Birthday parties
* Library events
Here are some ideas to get you started!
 
Opening Ceremonies
Start off your Kid Olympics with an Opening Ceremony parade. Here's what you'll need:

Olympic Torch
You can make a simple torch out of a paper towel roll and tissue paper—click here for directions. Designate one (or more) kids to be the official Torch Carrier.
Flags
Copy some world flags out of the encyclopedia, or download some Olympic flag templates here.
Music
Play some good marching music, or hand out instruments (or pots and pans!) so kids can make their own music.
Olympic Mascot
You can make your own Olympic mascot by dressing up a favorite stuffed animal. Click here for some ideas!
 
Olympic Events
There's no limit to the kinds of events you hold in your Kid Olympics, and you can hold them indoors or outside. Here are some sample events:
* Three-legged race
* 50-yard dash
* Marathon (run around the block, school, or other appropriate distance)
* Gymnastics (create a simple routine including cartwheels, somersaults, etc.)
* Jump rope competition
* Water balloon toss
* Tug of War
* Long jump
* Speed walking
* Egg on a spoon race
* Discus throw (using a Frisbee)
* Basketball free-throw
* Hula-hoop competition
* Limbo competition
* Team events like kickball, softball, or soccer
Medals
Make some medals to present to the winners... or to all of the kid athletes. You can make medals out of tin foil or yogurt lids, or click here to download some templates.
 
Closing Ceremony
End your Kid Olympics with a Closing Ceremony parade so kids can show off their medals! You can even make olive wreaths for the athletes, like the ancient Olympic athletes wore.

                    </Col>
                        {AuthContext.authStatus !== 'authenticated' && <Col sm={4}><Login /></Col>}
                    <Col sm={2}>
                       <SideBar />    
                    </Col>
                </Row>
            </Container>
        );
    }

export default HomePage;