import React from 'react';
import {

  Col,
  Row,

} from 'react-bootstrap';

// import Logo from "../images/ondeck-icon-180.png";

import "../css/App.css";

export default function Home() {
  return (
    <div className="home">

        
        {/* <Row>
      
          <Col className="profile">

          <img className="img-responsive" src={Logo} alt="logo" />

          </Col>
        
        </Row> */}
       
        <div>

        
        <Row>
          <Col>
            <p className="paragraph">
            Hi, I'm Brian Albright, and I founded On Deck Consulting in 2019 primarily as an aquatic safety and competitive swimming based consulting firm based in Austin, TX. 
            You can read more about my 30+ year background in aquatics  here.
            I recently pivoted to a career change to tech, taking a full stack web developer program through UT Austin. 
            As a result, I am offering web design and development services through On Deck Consulting.
            <br/>
            <br/>
            This site is being upgraded after transitioning it from being hosted by Squarespace. I'll be updating it during breaks from other projects. 
            Just keep in mind that it is mostly placeholder right now and not necessarily representative of where I want it to be. 
            <br/>
            <br/>
            The service I'm primarily offering through On Deck Consulting right now is as a public address announcer. I've been announcing swim meets for over 20 years, and am known throughout the swim community. 
            I mostly announce in Texas but am willing to travel. Contact me if you're looking for a professional public address announcer to raise the level of your swim meet. 
            <br/>
            <br/>
            </p>
          </Col>
        </Row>
        </div>


    </div>
  );
}
