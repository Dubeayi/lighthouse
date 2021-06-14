import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AboutUs from './webPages/AboutUs';

function NavigationalMenu(props) {
  const {pageRender} = props;
  return (
    <Container className="navMenu">
      <Row>
        {/* <Col>
          <div className="logo" value="Home">
            <img src="https://i.ibb.co/N9Jg3sq/Screen-Shot-2021-05-30-at-10-20-57-PM.png" alt="Lighthouse logo" value="Home" onClick={props.pageRender} />
          </div>
        </Col> */}
        <Col>
        <ul className="navigation-list">
          <li className="navigation-item"><button value="Services" onClick={props.pageRender}>Services</button></li>
          <li className="navigation-item"><button value="VirtualTour" onClick={props.pageRender}>Virtual Tour</button></li>
          <li className="navigation-item"><button value="ContactUs" onClick={props.pageRender}>Contact Us</button></li>
          <li className="navigation-item"><button value="Pricing" onClick={props.pageRender}>Pricing</button></li>
          <li className="navigation-item"><button value="AboutUs" onClick={props.pageRender}>About Lighthouse</button></li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default NavigationalMenu;
