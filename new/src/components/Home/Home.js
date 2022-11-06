import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ReactGlobe from 'react-globe.gl';
import globe from "../../Assets/Globe/globe.jpg";
import space from "../../Assets/Globe/night-sky.png"
import spaceports from "../Flights/spaceports"
import { Collapse } from 'antd';
import Button from "react-bootstrap/Button";
import { IconContext } from "react-icons";
import mars from '../../Assets/Globe/mars-transparent-png-stickpng-0.png';
import moon from '../../Assets/Globe/moon-png-no-background-15.png';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card';
import col from 'react-bootstrap/Col';
import row from 'react-bootstrap/Row';


const options = {
  ambientLightColor: 'red',
  cameraRotateSpeed: 0.5,
  focusAnimationDuration: 2000,
  focusEasingFunction: ['Linear', 'None'],
  pointLightColor: 'gold',
  pointLightIntensity: 1.5,
  globeGlowColor: 'blue',
};

function Home() {
  //testing this:
  const onChange = (key) => {
    console.log(key);
  };

  const styleObj = {
    fontSize: 14,
  };

  const { useState, useEffect } = React;
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    fetch('../Flights/spaceports.js')
      .then(r =>r.js())
      .then(setPorts)
  }, []);

/*
  useEffect(() => {
       ReactGlobe.current.controls().autorotate = true;
       ReactGlobe.current.controls().autoRotateSpeed = 0.2;
      }, [ReactGlobe]);
*/
  return (
    <Container fluid className="Earth">
      <Particle />
      <Container>
          
          <div style={{width: '100%',
            transform: "translate(-55%, 0%)"
          /*useEffect() => { 
                // Auto-rotate 
                ReactGlobe.current.controls().autoRotate = true; 
                ReactGlobe.current.controls().autoRotateSpeed = 0.1; 
              }, [ReactGlobe]); */

          }}>
            <ReactGlobe
              height="50%"
              width="50%"
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl={globe}
              atmosphereColor = "BlueViolet"
              atmosphereAltitude={.25}
              labelsData={spaceports}
              labelLat={(d) => d.lat}
              labelLng={(d) => d.lng}
              labelColor={() => "rgba(200, 0, 215, 1)"}
              labelText="spaceport"
              labelSize={1.5}
              labelDotRadius={1}
              /*labelDotOrientation() => 'right'*/
              labellabel={d => `
                <div><b>${d.spaceport}</b></div>
                <div>Location: ${d.city}</div>
                <div>Launching to: ${d.destinations}</div>
              `}
              onLabelClick= {d => window.open("/bookflight", '_parent')}
            
            />
          </div>  
          
          <div style={{transform: "translate(35%,-190%)", color: "white", fontsize: "80px"}}>
            <div><h3>Be the First to Experience  <strong className = "purple"> Mars!</strong></h3></div>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <CardGroup style={{transform: "translate(50%,0%)"}}>
                    <Card style={{height: '350px', width: "15px", backgroundColor: 'rgba(240, 240, 240, 0.7)'}}>
                      <Card.Img variant="top" src={moon} style={{width: "150px", height: "150px"}} />
                      <Card.Body>
                        <Card.Title style={{color: "rgba(200, 0, 215, 1)"}}>Kaikonur Cosmodrom</Card.Title>
                        <Card.Text style={{color: "rgba(200, 0, 215, 1)"}}>
                          Nov. 18, 2022
                        </Card.Text>
                        <Link to={{pathname: "/bookflight",
                        state: {stateParam: true, name: 'Kaikonur Cosmodrom', date: 1}
                    }}>
                        <Button variant="primary">Reserve Ticket(s)</Button></Link>
                      </Card.Body>
                    </Card>

                    <Card style={{height: '350px', width: "15px", backgroundColor: 'rgba(240, 240, 240, 0.7)'}}>
                      <Card.Img variant="top" src={mars} style={{width: "150px", height: "150px"}} />
                      <Card.Body>
                        <Card.Title style={{color: "rgba(200, 0, 215, 1)"}}>Spaceport America</Card.Title>
                        <Card.Text style={{color: "rgba(200, 0, 215, 1)"}}>
                          Dec. 8, 2022
                        </Card.Text>
                          <Link to="/bookflight">                       
                          <Button variant="primary">Reserve Ticket(s)</Button>
                        </Link>
                      </Card.Body>
                    </Card>

                    <Card style={{height: '350px', width: "15px", backgroundColor: 'rgba(240, 240, 240, 0.7)'}}>
                      <Card.Img variant="top" src={mars} style={{width: "150px", height: "150px"}} />
                      <Card.Body>
                        <Card.Title style={{color: "rgba(200, 0, 215, 1)"}}>Andoya Space</Card.Title>
                        <Card.Text style={{color: "rgba(200, 0, 215, 1)"}}>
                          Dec. 8, 2022
                        </Card.Text>
                        <Link to="/bookflight">
                        <Button variant="primary">Reserve Ticket(s)</Button></Link>
                      </Card.Body>
                    </Card>

                    <Card style={{height: '350px', width: "15px", backgroundColor: 'rgba(240, 240, 240, 0.7)'}}>
                      <Card.Img variant="top" src={mars} style={{width: "150px", height: "150px"}} />
                      <Card.Body>
                        <Card.Title style={{color: "rgba(200, 0, 215, 1)"}}>SpaceX Spaceport</Card.Title>
                        <Card.Text style={{color: "rgba(200, 0, 215, 1)"}}>
                          Dec. 9, 2022
                        </Card.Text>
                        <Link to="/bookflight">
                        <Button variant="primary">Reserve Ticket(s)</Button></Link>
                      </Card.Body>
                    </Card>
                    
                  </CardGroup>
                </Col>
              ))}
            </Row>
          </div>
          {/* <div style={{transform: "translate(30%,-500%)", color: "pink", fontsize: "80px"}}>
            <Link to="/bookflight">
            <Button variant="primary" size="xxl" style={{width: "50%", borderStyle: "solid;", borderColor: "pink;", borderRadius: "10px"}}>
            <h1></h1>
            <img style={{horizontalAlign: 'left', width:"10%",height:"10%"}} src={mars} alt="Logo" />
            <p style={{fontsize: '12px', color:'#FFFFFF', textAlign:'right'}}>Spaceport America Dec. 8</p>
            </Button>
            </Link>
          </div> */}
      </Container>
    </Container>
  );
}

export default Home;
