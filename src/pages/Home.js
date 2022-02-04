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
            Brian is a web developer based in Austin, TX. 
            <br/>
            <br/>
            Before going into the tech industry, he spent over 30 years working in aquatics on both the aquatic safety and operations side, and the competitive swimming side. 
            <br/>
            <br/>
            This site is the initial placeholder for the On Deck Consulting site formerly hosted on Squarespace. 
            <br/>
            <br/>
            If you would like to get in touch with Brian to announce a swim meet or to work on a tech project, his contact info is posted on the contact page as well as an email link posted below. 
            </p>
          </Col>
        </Row>
        </div>


    </div>
  );
}
