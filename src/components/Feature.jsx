import { Card, Col, Container, Row } from "react-bootstrap";
import f1 from "../assets/features/f1.png"
import f2 from "../assets/features/f2.png"
import f3 from "../assets/features/f3.png"
import f4 from "../assets/features/f4.png"
import f5 from "../assets/features/f5.png"
import f6 from "../assets/features/f6.png"
const Feature = () => (
  <Container  >
    <Row className="mx-auto row-cols-3  row-cols-md-4 row-cols-lg-6 g-3 my-5">
      <Col>
        <Card id="card-feature" className="mx-auto card-feature-1" style={{ width: "11 rem", height: "210px" }}>
          <Card.Img className=" w-100 w-md-75 w-lg-100 mx-auto mt-4" variant="top" src={f1} />
          <Card.Body>
            <h6>Free Shipping</h6>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="card-feature" className="mx-auto card-feature-2" style={{ width: "11 rem", height: "210px" }}>
          <Card.Img className=" w-100 w-md-75 w-lg-100 mx-auto mt-4" variant="top" src={f2} />
          <Card.Body>
            <h6>Online Order</h6>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="card-feature" className="mx-auto card-feature-3" style={{ width: "11 rem", height: "210px" }}>
          <Card.Img className=" w-100 w-md-75 w-lg-100 mx-auto mt-4 " variant="top" src={f3} />
          <Card.Body>
            <h6>Save Money</h6>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="card-feature" className="mx-auto card-feature-4" style={{ width: "11 rem", height: "210px" }}>
          <Card.Img className=" w-100 w-md-75 w-lg-100 mx-auto mt-4" variant="top" src={f4} />
          <Card.Body>
            <h6>Promotions</h6>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="card-feature" className="mx-auto card-feature-5" style={{ width: "11 rem", height: "210px" }}>
          <Card.Img className=" w-100 w-md-75 w-lg-100 mx-auto mt-4" variant="top" src={f5} />
          <Card.Body>
            <h6>Happy Sell</h6>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="card-feature" className="mx-auto card-feature-6" style={{ width: "11 rem", height: "210px" }}>
          <Card.Img className=" w-100 w-md-75 w-lg-100 mx-auto mt-4" variant="top" src={f6} />
          <Card.Body>
            <h6>F24/7 Support</h6>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Feature;
