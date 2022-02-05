import React from 'react';
import {

  Col,
  Row,

} from 'react-bootstrap';

import Logo from "../images/ondeck-icon-180.png";

import "../css/App.css";

export default function Home() {
  return (
    <div className="home">

        
        <Row>
      
          <Col className="profile">

          <img className="img-responsive" src={Logo} alt="logo" />

          </Col>
        
        </Row>
       
        <div>

        
        <Row>
          <Col>
            <p className="paragraph">
            On Deck Consulting, LCC is a consulting company founded by Brian Albright in 2019. 
            <br/>
            <br/>
            Brian is a web developer and aquatic safety consultant based in Austin, TX. 
            <br/>
            <br/>
             
            </p>
          </Col>
        </Row>
        </div>


    </div>
  );
}
