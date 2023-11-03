import React, { useEffect, useState } from 'react';
import { API, graphqlOperation, DataStore } from 'aws-amplify';

import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';
import ChampionCreateForm from "../../ui-components/ChampionCreateForm"
import { Champion } from "../../models";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Divider } from '@aws-amplify/ui-react';

const ChampionsPage = () => {
    const [championsData, setChampionstData] = useState([]);
    const AuthContext = useAuthenticator((context) => [context]);
    useEffect(() => {
        getChampions();
    }, []
    )
    const getChampions = async () => {
        try {
            const championsDataList = await DataStore.query(Champion)
            console.log(championsDataList);
            setChampionstData(championsDataList);

        } catch (error) {
            console.log(error);
        }
    };
  
    return (
        <Container fluid className='px-5 py-5 champions-container'>
            <Row>
                <Col>
                    <Row>
                        <Col  sm={5}>Champion</Col>
                        <Col  sm={4}>Summary</Col>
                        <Col  sm={3}>Records</Col>
                    </Row>
                    <Row className='events-header'>
                        <Divider />
                    </Row>
                    <Col>
                    {championsData.map((champ, ind) => {
                        return (<Row className="events-data" key={ind}>
                            <Col >{champ.name} - {champ.address} - {champ.phone}</Col>
                            <Col>{champ.summary}</Col>
                            <Col sm={2}>
                                {champ.records.map((record, idx) => {
                                    return(
                                       <p key={idx}>{record}</p>  
                                    )
                                })}
                            </Col>
                        </Row>)
                    })}
                </Col>     
                </Col>
                {AuthContext.authStatus === 'authenticated' &&
                    <Col sm={5} className='small-form'>
                        <ChampionCreateForm onSuccess={getChampions}/>
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default ChampionsPage;