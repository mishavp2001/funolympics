import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';
import ChampionCreateForm from "../../ui-components/ChampionCreateForm"
import { listChampions } from "../../graphql/queries";
import { useAuthenticator } from '@aws-amplify/ui-react';

const ChampionsPage = () => {
    const [championsData, setChampionstData] = useState([]);
    const AuthContext = useAuthenticator((context) => [context]);
    const getChampions = async () => {
        try {
            const championsDataList = await API.graphql(
                {
                    query: listChampions,
                    authMode: 'AWS_IAM'
                }
            );
            console.log(championsDataList);
            setChampionstData(championsDataList.data.listChampions.items);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getChampions();
    }, []
    )

  
    return (
        <Container fluid className='px-5 py-5 champions-container'>
            <Row>
                <Col>
                    {championsData.map((champ, ind) => {
                        return (<Row className="events-data" key={ind}>
                            <Col>{champ.name} : {champ.summary}</Col>
                            <Col>{champ.phone}</Col>
                        </Row>)
                    })}
                </Col>
                {AuthContext.authStatus === 'authenticated' &&
                    <Col sm={5} className='small-form'>
                        <ChampionCreateForm />
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default ChampionsPage;