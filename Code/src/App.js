// import logo from './logo.svg';
import "./App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import logo from "../src/images/logo.svg";
import slider1 from "../src/images/slider-1.svg";
import slider2 from "../src/images/slider-2.svg";
import slider3 from "../src/images/slider-3.svg";

import google from "../src/images/google.svg";
import facebook from "../src/images/facebook.svg";
import twitter from "../src/images/twitter.svg";

function App() {
  return (
    <Container fluid>
      <Row className="signin-page">
        <Col className="signin-info">
          <img src={logo} alt="skydrive" />

          <Carousel>
            <Carousel.Item>
              <img src={slider1} alt="" />
              <Carousel.Caption>
                <h2>
                  Your <span> Storage </span> on the Cloud
                </h2>
                <p className="text-left">
                  The slickest, fullest-featured, and most generous cloud
                  storage and syncing services, with excellent productivity
                  suite collaboration capabilities.
                </p>
                <Button variant="primary" size="lg">
                  {" "}
                  Learn More{" "}
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slider2} alt="" />
              <Carousel.Caption>
                <h2>
                  <span> Unlimited </span> Cloud Storage
                </h2>
                <p className="text-left">
                  The personal plan covers an unlimited number of devices, which
                  is great for families and people who simply have lots of
                  devices
                </p>
                <Button variant="primary" size="lg">
                  {" "}
                  Learn More{" "}
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slider3} alt="" />
              <Carousel.Caption>
                <h2>
                  Total <span> Security </span> with 256-bit Encryption
                </h2>
                <p className="text-left">
                  256-bit AES to encrypt data locally, either with the key it
                  sets or the private key you create. Your data remains
                  encrypted during transmission, while at rest on the servers,
                  and until you restore it
                </p>
                <Button variant="primary" size="lg">
                  {" "}
                  Learn More{" "}
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col>
          <div className="sign-in-group">
            <h4>Sign in to your Account</h4>
            <h6>
              Don't have an account? <span>Start your 7 day Free Trial</span>{" "}
            </h6>
            <Form className="mt-5">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <a href="#"> Forget your password ? </a>

              <Button
                className="mt-4"
                variant="primary"
                size="lg"
                block
                type="submit"
              >
                Sign In
              </Button>
            </Form>
            <div className='line-wrap'>
              <div className="line"></div>{" "}
              <span className="or text-center">Or</span>{" "}
            </div>
            <p className="signin-para">Sign in with</p>
            <div className="socail-media d-flex">
              <img src={google} alt="skydrive" />
              <img src={facebook} alt="skydrive" />
              <img src={twitter} alt="skydrive" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
