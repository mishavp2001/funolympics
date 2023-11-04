import React, { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';

import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';
import GameCreateForm from "../../ui-components/GameCreateForm"
import { Game } from "../../models";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Divider } from '@aws-amplify/ui-react';

const Games = () => {
    const [gamesData, setgamestData] = useState([]);
    const AuthContext = useAuthenticator((context) => [context]);
    useEffect(() => {
        getGames();
    }, []
    )
    const getGames = async () => {
        try {
            const gamesDataList = await DataStore.query(Game)
            console.log(gamesDataList);
            setgamestData(gamesDataList);

        } catch (error) {
            console.log(error);
        }
    };
  
    return (
        <Container fluid className='px-5 py-5 generic-container'>
            <Row>
                <Col>
                    <Row>
                        <Col  sm={5}>Game</Col>
                        <Col  sm={4}>Summary</Col>
                        <Col  sm={3}>Rules</Col>
                    </Row>
                    <Row className='events-header'>
                        <Divider />
                    </Row>
                    <Col>
                    {gamesData.map((game, ind) => {
                        return (<Row className="events-data" key={ind}>
                            <Col>{game.summary}</Col>
                            <Col sm={2}>
                                {game.rules.map((rule, idx) => {
                                    return(
                                       <p key={idx}>{rule}</p>  
                                    )
                                })}
                            </Col>
                        </Row>)
                    })}
                </Col>     
                </Col>
                {AuthContext.authStatus === 'authenticated' &&
                    <Col sm={5} className='small-form'>
                        <GameCreateForm onSuccess={getGames}/>
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default Games;