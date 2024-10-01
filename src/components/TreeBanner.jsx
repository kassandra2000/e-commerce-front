import { Col, Container } from "react-bootstrap";

const ThreeBanner = () => (
  <Container className=" three-banner mb-5">
    <Col className="banner-box  me-lg-3 me-md-0">
      <h2>SEASONAL SALE</h2>
      <h3>Winter Collection -50% OFFS</h3>
    </Col>

    <Col className="banner-box banner-box2 me-lg-3 me-md-0">
      <h2>NEW FOOTWEAR COLLECTION</h2>
      <h3>Spring / Summer 2024</h3>
    </Col>

    <Col className="banner-box banner-box3 ">
      <h2>T-SHIRTS</h2>
      <h3>New Trendy Prints</h3>
    </Col>
  </Container>
);
export default ThreeBanner;
