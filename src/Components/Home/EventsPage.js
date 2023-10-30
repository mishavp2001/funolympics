import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Form, Button, Nav } from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import { createEvent } from "../../graphql/mutations";
import { listEvents } from "../../graphql/queries";
import { Divider } from '@aws-amplify/ui-react';

function EventsPage() {
    const [eventData, setEventData] = useState({ zip: "", phone: "", summary: "", theme: "", email: "" });
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        getEvents();
    }, []
    )

    const addNewEvent = async () => {
        try {

            const { zip, theme, summary, phone, email } = eventData;
            const newEvent = {
                id: uuid(),
                zip,
                theme,
                summary,
                phone,
                email,
            }

            //Ad new Event
            await API.graphql(graphqlOperation(createEvent, { input: newEvent }));
        } catch (error) {
            console.log(error);
        };
    }
    const getEvents = async () => {
        try {
            const eventsDataList = await API.graphql(graphqlOperation(listEvents));
            console.log(eventsData);
            setEventsData(eventsDataList.data.listEvents.items);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container fluid className='px-5 my-5'>
            <Row>
                <Col sm={5}>
                         <Row>
                            <Col>Events</Col>
                            <Col>Location(ZIP)</Col>
                            <Col>Contacts</Col>
                         </Row>
                         <Row>
                            <Divider  className='my-1'/>
                         </Row> 
                    {eventsData.map((event)=>{
                         <Row>
                             <Col>{event.summary}</Col>
                            <Col>{event.zip}</Col>
                            <Col>{event.phone}</Col>
                         </Row>   
                    })}
                     <Row>
                            <Divider  className='my-5'/>
                         </Row> 
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <Form>
                        <fieldset>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    placeholder="Event Zip code"
                                    aria-label="Zip"
                                    value={eventData.zip}
                                    onChange={evt => setEventData({ ...eventData, zip: evt.target.value })}
                                />
                                <br />
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    placeholder="Contact Phone"
                                    aria-label="phone"
                                    value={eventData.phone}
                                    onChange={evt => setEventData({ ...eventData, phone: evt.target.value })}
                                />
                                <br/>
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    placeholder="Email"
                                    aria-label="pemailhone"
                                    value={eventData.email}
                                    onChange={evt => setEventData({ ...eventData, email: evt.target.value })}
                                />
                                <br/>
                                <Form.Label>Summary of the Event</Form.Label>
                                <Form.Control as="textarea"
                                    value={eventData.summary}
                                    onChange={evt => setEventData({ ...eventData, summary: evt.target.value })}
                                    rows={3} />
                                <Form.Label>Sport Theme</Form.Label> <br />
                                <Form.Select
                                    id="theme"
                                    value={eventData.theme}
                                    onChange={evt => setEventData({ ...eventData, theme: evt.target[evt.target.selectedIndex].text })}

                                >
                                    <option>Soccer</option>
                                    <option>Basketball</option>
                                    <option>Volleyball</option>
                                    <option>All Sports</option>
                                </Form.Select>
                            </Form.Group>
                        </fieldset>
                        <Button type="submit" onClick={addNewEvent}>Add Event</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default EventsPage;