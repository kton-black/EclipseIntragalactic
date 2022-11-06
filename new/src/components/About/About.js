import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "10px",
            }}
          >
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <Col>
        <h1 style={{ fontSize: "60px", paddingBottom: "20px",}}>
              Eclipse Intragalactic's <strong className="purple">Mission</strong>
        </h1>
        <h1 className="project-heading">
          Solve a Real <strong className="purple">Problem</strong>?
        </h1>
        <p>
          - Approaching the future of space travel.
        </p>
        <p>
          - Knowing about potential future expeditions.
        </p>
        <p>
          - Showing average consumer market reality of costs.
        </p>
        <p>
          - Gives a platform for the free market.
        </p>
        </Col>

        <h1 className="project-heading">
          Was the Hack <strong className="purple">Challenging</strong>?
        </h1>
        <p>
          - Had to calculate potential costs.
        </p>
        <p>
          - Estimate travel distance based on Synodic Periods.
        </p>
        <p>
          - Learning React.js, HTML, and associated libraries
        </p>
        <p>
          - Gives a platform for the free market.
        </p>

        <h1 className="project-heading">
          Is the Hack <strong className="purple">Functional</strong>?
        </h1>
        <p>
          - We wanted to integrate SQL for shopping and users, but we didn't have time to implement it.
        </p>
        <p>
          - Ideas are all showcased, but they have some flaws.
        </p>
        <p>
          - The tickets are hardcoded, there is not a real, secure payment process, and it may not be compatible on all platforms.
        </p>
        
        <h1 className="project-heading">
          Is the Hack <strong className="purple">Pleasant</strong> and <strong className="purple">Usable</strong>?
        </h1>
        <p>
          - Our website displays the real potential for future.
        </p>
        <p>
          - Our UI serves to be easy on the eyes.
        </p>
        <p>
          - It is simple and functional.
        </p>

        <h1 className="project-heading">
          Potential for <strong className="purple">Impact</strong>?
        </h1>
        <p style={{fontSize: "30px"}}>
          There is some immediate impact. 
        </p>
        <p><small>It allows people to predict when potential expeditions could be.</small></p>
        <p><small>Gives perspective of what costs could look like.</small></p>
        <p><small>Provides education of prime spaceports.</small></p>
        <p style={{fontSize: "30px"}}>
          There is also future impact.
        </p>
        <p><small>With consumers prepared for the costs of intragalactic travel, it may help prepare the market.</small></p>
        <p><small>It provides time frames for trips, since they are inherently limited.</small></p>

        <h1 className="project-heading">
          Team Members: <strong className="purple"> Keaton Black, Ben Brooks, Tony Lessmeister,<br></br> Tim Kellermann </strong>
        </h1>
            <h1><br></br></h1>
        <h1 className="project-heading">
            Our Group chose this project because in the very near future space travel will be widely used. 
        </h1>

      </Container>
    </Container>
  );
}

export default About;
