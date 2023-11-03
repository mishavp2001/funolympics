import { DataStore } from 'aws-amplify';
import { Event } from "../../models";

import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Form, Button, Nav } from 'react-bootstrap';
import { Divider } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {EventCreateForm} from '../../ui-components';

    
function EventsPage() {
    const [eventData, setEventData] = useState({ zip: "", phone: "", summary: "", theme: "", email: "" });
    const [eventsData, setEventsData] = useState([]);
    const AuthContext = useAuthenticator((context) => [context]);

    useEffect(() => {
        getEvents();
    }, []
    )

    const getEvents = async () => {
        try {
            const eventsDataList =  await DataStore.query(Event)
            console.log(eventsDataList);
            setEventsData(eventsDataList);

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container fluid className='px-5 py-5 events-container'>
            <Row>
                <Col>
                    <Row>
                        <Col>Events</Col>
                        <Col>Location(ZIP)</Col>
                        <Col>Contacts</Col>
                    </Row>
                    <Row className='events-header'>
                        <Divider />
                    </Row>
                    {eventsData.map((event, ind) => {
                        return (<Row className="events-data" key={ind}>
                            <Col>{event.theme || 'Any'} : {event.summary || 'Contact for more information'}</Col>
                            <Col>{event.zip}</Col>
                            <Col>{event.phone} or {event.email}</Col>
                        </Row>)
                    })}
                </Col>
                {AuthContext.authStatus === 'authenticated' && 
                                <Col sm={4}className='small-form'>
                                <h4>Add Public Event</h4>
                             <EventCreateForm onSuccess={getEvents}/>
                            </Col>
                }
            </Row>
        </Container>
    );
}
export default EventsPage;