import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import play from "../assets/pay/play.jpg";
import pay from "../assets/pay/pay.png";
import app from "../assets/pay/app.jpg";

const Footer = () => (
  <Container fluid className="footer">
    <Row className="row-cols-2 justify-content-center row-cols-sm-2  row-cols-md-5">
      <Col className=" ">
        <img className="logo" src={logo} alt="" />
        <h4>contact</h4>
        <p>
          <strong>Address: </strong> 562 Wellington Road, Street 32, San
          Francisco
        </p>
        <p>
          <strong>Phone: </strong> +01 2222 365 / (+91) 01 2345 6789
        </p>
        <p>
          <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </Col>

      <Col className="ms-md-5 ">
        <h4>About</h4>
        <a href="/">About Us</a>
        <a href="/">Delivery Information</a>
        <a href="/">Privacy Policy</a>
        <a href="/">terms & Conditions</a>
        <a href="/">Contact Us</a>
      </Col>

      <Col className="mt-5 mt-md-0 ">
        <h4>My Account</h4>
        <a href="/">Sign In</a>
        <a href="/">View Cart</a>
        <a href="/">My Wishlist</a>
        <a href="/">Track My Order</a>
        <a href="/">Help</a>
      </Col>

      <Col className="install mt-5 mt-md-0">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>

        <img src={app}alt="" />
        <img src={play} alt="" />

        <p>Secured payment Gateways</p>
        <img className="pay" src={pay}alt="" />
      </Col>

      <div className="copyright">
        <p>0 2021, Tech2 etc -HTML CSS Ecommerce Template</p>
      </div>
    </Row>
  </Container>
);
export default Footer;
