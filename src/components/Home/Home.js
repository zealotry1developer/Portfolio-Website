import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import codingPerson from "../../Assets/lottie/codingPerson";
import DisplayLottie from "./DisplayLottie";
import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";
//import Lottie from 'react-lottie';


 const illustration = {
   animated: true // Set to false to use static SVG
 };
// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: codingPerson,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// };
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Hudson Hand</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>

            <Col md={6} style={{ paddingBottom: 20 }}>
              
               <div className="greeting-image-div">
                {illustration.animated ? (
                  <DisplayLottie animationData={codingPerson} />
                ) : (
                  <img
                    alt="man sitting on table"
                    src={require("../../Assets/images/manOnTable.svg")}
                  ></img>
                )}
              </div> 
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
