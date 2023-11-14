import React, { useEffect, useState } from 'react';
import { DataStore, Storage, API } from 'aws-amplify';

import { Row, Col, Container, Image, Button, Nav } from 'react-bootstrap';
import ChampionCreateForm from "../../ui-components/ChampionCreateFormv2"
import { Champion } from "../../models";
import awsExports from "../../aws-exports";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Divider } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import StorageVideo from '../Common/StorageVideo';

const ChampionsPage = () => {
    const [championsData, setChampionstData] = useState({champs: [], videos: {}});

    const AuthContext = useAuthenticator((context) => [context]);

     useEffect(() =>  {
        getChampions();
        console.log("Champions load")
    }, []
    )
  
    const getChampions = async () => {
        try {
            const championsDataList = await DataStore.query(Champion)            
            setChampionstData({
                champs: championsDataList,
                }
            );
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

                    {championsData.champs.map((champ, ind) => {
                        return (<Row className="events-data" key={ind}>
                            <Col >{champ.name} - {champ.address} - {champ.phone}</Col>
                            <Col>
                                {champ.summary}
                                {champ?.imgS3?.key  && champ.imgS3.key.match('jpg|png') && 
                                    <StorageImage imgKey={champ?.imgS3?.key} />
                                }
                                {champ?.imgS3?.key && !champ.imgS3.key.match('jpg|png') &&
                                    <StorageVideo videoKey={champ?.imgS3?.key} />
                                }
                            </Col>
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
                        <ChampionCreateForm 
                            overrides={{
                                summary: {
                                    descriptiveText: `Enter summary`
                                  }
                            }}
                            onSuccess={(resp, id)=>{ getChampions();}}/>
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default ChampionsPage;