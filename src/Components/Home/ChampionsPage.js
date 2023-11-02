import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';
import ChampionCreateForm from "../../ui-components/ChampionCreateForm"
import { listChampions } from "../../graphql/queries";
import { useAuthenticator } from '@aws-amplify/ui-react';

const ChampionsPage = () => {
    const [championsDataList, setChampionstData] = useState([]);
    const AuthContext = useAuthenticator((context) => [context]);
    const getChampions = async () => {
        try {
            championsDataList = await API.graphql(
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
                    {championsDataList.map((champ, ind) => {
                        return (<Row className="events-data" key={ind}>
                            <Col>{champ.name} : {champ.summary}</Col>
                            <Col>{champ.phone}</Col>
                        </Row>)
                    })}
                </Col>
                {AuthContext.authStatus === 'authenticated' &&
                    <Col sm={5}>
                        <ChampionCreateForm />
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default ChampionsPage;