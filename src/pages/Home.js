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
            On
            <br/>
            <br/>
            Deck 
            <br/>
            <br/>
            Consulting
            <br/>
            <br/>
            </p>
          </Col>
        </Row>
        </div>


    </div>
  );
}