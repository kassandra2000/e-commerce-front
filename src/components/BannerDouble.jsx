import { Col, Container } from "react-bootstrap";

const BannerDouble = () => (
  <Container className="double-banner   my-5">
    <Col className="  ban-1">
      <h4>crazy deals</h4>
      <h2>buy 1 get 1 free</h2>
      <span>The best classic dress in on sale at cara</span>
      <button className="white">Learn More</button>
    </Col>
    <Col className="  ban-2">
      <h4>spring/summer</h4>
      <h2>upcoming season</h2>
      <span>The best classic dress in on sale at cara</span>
      <button className="white">Collection</button>
    </Col>
  </Container>
);

export default BannerDouble;
