import React from 'react';
import '../css/App.css';
import { 
 Container,
 Row,
 Col,
 Card } 
from 'react-bootstrap';
import leverage from "../images/project2leveragewo2.png";
import Jester from "../images/jester.png"

export default function Portfolio() {
  return (
        <div>
          <h1 className="title">Tech Portfolio</h1>
          <Container className='tech'>
          <Row>
              <Col>
                <Card className="ProjectCard">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Jester: fun challenge social media app</Card.Title>
                        <Card.Img variant="top" src={Jester} />
                      <Card.Link href="https://jester2.herokuapp.com/" target="_blank">View</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/Jester2.0" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
            <Row>
              <Col>
                <Card className="ProjectCard">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Leverage: a workout building app</Card.Title>
                        <Card.Img variant="top" src={leverage} />
                      <Card.Link href="https://leveragewo.herokuapp.com/" target="_blank">View</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/Leverage" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

        </div>
  );
}
