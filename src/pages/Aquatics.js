import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../images/ondeck-icon-180.png";
import ARC from "../images/ARC.png";
import NASCO from "../images/NASCO.jpg";
import TPPC from "../images/TPPC.jpg";
import NRPA from "../images/NRPA.jpg";
import AOAP from "../images/AOAP.png";
import TRAPS from "../images/TRAPS.png";
import NDPA from "../images/NDPA.png";
import CTS from "../images/CTS2.png";
import DAK from "../images/Dak3.jpg";
import HYTEK from "../images/hytek1.jpg";
import USAS from "../images/USAswimming.png";
import USMS from "../images/USMS.jpeg";
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
                <Row className="instructor">
                <img className="img-responsive" src={ARC} alt="logo" />
                <img className="img-responsive" src={NASCO} alt="logo" />
                </Row>
                <br />
                One of the reasons I stayed at WHAC for as long as I did was it
                allowed me the freedom, while still working more than full time,
                to assist with teaching lifeguard classes for credit at UT
                Austin, consulting and traveling the state to work with
                facilities and staff, teaching at clinics, and speaking at
                state and national conferences and workshops, like the National 
                Drowning Prevention Alliance, the Association of Aquatic Professionals, 
                and the Texas Public Pool Council. As an instructor for over 30 years, 
                I taught with the National Aquatic Safety Company and American Red Cross.
                <br />
                <br />
                <Row className="instructor">
                <img className="img-responsive" src={NDPA} alt="logo" />
                </Row>
                <br />
                <Row className="instructor">
                <img className="img-responsive" src={AOAP} alt="logo" />
                <img className="img-responsive" src={NRPA} alt="logo" />
                <img className="img-responsive" src={TPPC} alt="logo" />
                </Row>
                <br />
                <Row className="instructor">
                <img className="img-responsive" src={TRAPS} alt="logo" />
                </Row>
                <br />
                In addition to working in aquatic safety, I also worked at the
                Texas Swim Center at UT Austin, one of the premier aquatic
                competition facilities in the world, and a facility that has the
                best meet operations staff in the country. We ran everything
                from local summer league and high school meets to USA Swimming
                and NCAA Championships, with virtually every major swimmer in
                the country coming through the facility at some point in their
                career. I've worked all the back end of running swimming meets,
                from the build to running timing (Daktronics and Colorado) and 
                scoring systems (Hy-Tek Meet Manager) to announcing. I'm also a 
                certified admin official.
                <br />
                <br />
                <Row className="instructor">
                <img className="img-responsive" src={CTS} alt="logo" />
                <img className="img-responsive" src={DAK} alt="logo" />
                <img className="img-responsive" src={HYTEK} alt="logo" />
                </Row>
                <br />
                <br />I have served on national committees for US Masters
                Swimming, serving a chair of the Officials Committee for two
                years. During my first year, the national officials certification
                program, which had been stalled for 25 years, was approached from 
                a new angle and passed. In my second year as chair, the USMS Officials
                Award was created. As part of serving as Officials Chair, I was 
                also a member of the USMS Rules Committee. I also served as vice chair of
                the USMS Legislation Committee after my time as Officials Chair.
                <br />
                <Row className="instructor">
                <img className="img-responsive" src={USAS} alt="logo" />
                <img className="img-responsive" src={USMS} alt="logo" />
                </Row>
                <br />
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
