import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../images/ondeck-icon-180.png";
import "../css/App.css";

export default function Aquatics() {
  return (
    <>
      <div className="aboutAquatics">
        <Row>
          <Col className="profile">
            <img className="img-responsive" src={Logo} alt="logo" />
          </Col>
        </Row>

        <div>
          <Row>
            <Col>
              <p className="paragraph">
                I am available for public address announcing at swim meets and
                running meet operations, as well as for facility audits and
                safety consulting.
                <br />
                <br />
                During 30+ years in aquatics, I worked around the top
                professionals in aquatic safety and competitive swimming. I
                spent almost 22 years as the general manager of the Western
                Hills Athletic Club, taking a small neighborhood pool that ran a
                deficit and didn't take safety seriously and turning it into a
                professional organization that rebuilt it's facilities, took
                programs in house to offer high qualify programming with a great
                reputation that made money for the club. Safety became a
                priority, as did the mentality that we didn't want to be in a
                position of shutting down temporarily because of poor
                maintenance and operations. And an organization that ran a
                deficit became an organization that had a six month untouchable
                reserve, a working reserve for upgrades, and paid for major
                upgrades in cash.
                <br />
                <br />
                One of the reasons I stayed at WHAC for as long as I did was it
                allowed me the freedom, while still working more than full time,
                to assist with teaching lifeguard classes for credit at UT
                Austin, consulting and traveling the state to work with
                facilities and staff, teaching at clinics, and speaking at
                conferences and workshops. I taught with the National Aquatic
                Safety Company and American Red Cross.
                <br />
                <br />
                In addition to working in aquatic safety, I also worked at the
                Texas Swim Center at UT Austin, one of the premier aquatic
                competition facilities in the world, and a facility that has the
                best meet operations staff in the country. We ran everything
                from local summer league and high school meets to USA Swimming
                and NCAA Championships, with virtually every major swimmer in
                the country coming through the facility at some point in their
                career. I've worked all the back end of running swimming meets,
                from the build to running timing and scoring systems to
                announcing. I'm also a certified admin official.
                <br />
                <br />I have served on national committees for US Masters
                Swimming, serving a chair of the Officials Committee for two
                years, during which the national officials certification
                program, which had been stalled for 25 years, was created as
                well as the USMS Officials award. I also serve as vice chair of
                the Legislation Committee.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
