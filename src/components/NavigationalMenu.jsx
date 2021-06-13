import React from 'react';
import AboutUs from './webPages/AboutUs';
import { Button, Container, Row, Col } from 'react-bootstrap';

function NavigationalMenu(props) {
  let pageRender = props.pageRender;
  return (
    <Container>
      <Row>
        {/* <Col>
          <div className="logo" value="Home">
            <img src="https://i.ibb.co/N9Jg3sq/Screen-Shot-2021-05-30-at-10-20-57-PM.png" alt="Lighthouse logo" value="Home" onClick={props.pageRender} />
          </div>
        </Col> */}
        <Col>
        <ul className="navigation-list">
          {/* <li className="navigation-item"><button value="Services" onClick= {() => console.log(event.target.value)}>Services</button></li> */}
          <li className="navigation-item"><button value="Services" onClick={props.pageRender}>Services</button></li>
          {/* <li className="navigation-item"><button onClick= {pageRender}>Services</button></li> */}
          <li className="navigation-item"><a href="#">Virtual Tour</a></li>
          <li className="navigation-item"><a href="#">Contact Us</a></li>
          <li className="navigation-item"><a href="#">Pricing</a></li>
          <li className="navigation-item"><a href="#">About Lighthouse</a></li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default NavigationalMenu;
