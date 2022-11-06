import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import 'react-dropdown/style.css';
import CustomSelect from "./CustomSelect";
import SelectPeople from "./SelectPeople";
import SelectDate from "./SelectDate";
import SelectLocation from "./SelectLocation";
import { Color } from "three";
import Calendar from 'react-calendar';
import { useParams, useLocations } from 'react-router-dom'; 

const selectStyle={
  select: {
    width: '25%',
    maxWidth: '600px', 
    textalign: 'left',
    color:'#08699B',
    backgroundcolor: 'pink'
    
  }
}

function BookFlight(props) {
  const [value, onChange] = useState(new Date());
  const [width, setWidth] = useState(1200);
  const [selectOption, setSelectedOption] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []
  );
  return (
   
    <div>
      <Container fluid className="book-flight">
      
        <Row style={{ justifyContent: "center", position: "relative", width: "100%", height: "200px"}}></Row>
        
        <Col style={{width: "25%"}}></Col>
        <Col style={{width: "50%"}}>
          
          <h1 style={{color: "White", transform: "translate(47%,0%)"}}>Reserve Your Trip</h1>
          
          <div style={{transform: "translate(135%,0%)",justifyContent: "space-between", width: '500px'}}>
            <CustomSelect style={{selectStyle, padding: "(50,50,50,50)"}}/>
            <br></br><br></br>
            <SelectPeople style={selectStyle.select}/> 
            <br></br><br></br>
            <SelectDate style={selectStyle.select}/> 
            <br></br><br></br>
            <SelectLocation style={selectStyle.select}/> 
            <br></br><br></br><br></br>
          </div>

          </Col>
          <Col style={{width: "25%"}}></Col>
        
        
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", width: "100%", height: "5px"}}></Row>
        <Row style={{ justifyContent: "center", position: "relative", margin: '50px'}}>
            <Button href = "https://www.deso.com/"
              style={{ maxWidth: "250px", height: "60px", width: "150px", backgroundColor: "#6c00d7"}}>
              Checkout
            </Button>
        </Row>
        <br></br>
        <h1 style = {{color: "#6c00d7"}}>Trip Costs:</h1>
        <div>
          <Col>
            <h1 style = {{color: "#6c00d7"}}>Moon (240 Thousand Miles)</h1>
            <h3 style = {{color: "white"}}>Travel Time: 3 days</h3>
            <h3 style = {{color: "white"}}>Travel Cost: $200,000</h3>
            <h3 style = {{color: "white"}}>Food Cost: $10,000</h3>
            <h3 style = {{color: "white"}}>Total Cost: $210,000</h3>
          </Col>
          <Col>
            <h1 style = {{color: "#6c00d7"}}>Mars (300 Million Miles)</h1>
            <h3 style = {{color: "white"}}>Travel Time: 7 months</h3>
            <h3 style = {{color: "white"}}>Travel Cost: $200,000</h3>
            <h3 style = {{color: "white"}}>Food Cost: $600,000</h3>
            <h3 style = {{color: "white"}}>Total Cost: $800,000</h3>
          </Col>
        </div>
        <Row style={{ justifyContent: "center", position: "relative", width: "100%", height: "100px",}}></Row>
      </Container>
    </div>

  );
}

export default BookFlight;
