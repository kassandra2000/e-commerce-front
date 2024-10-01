import { Col, Container, Form } from "react-bootstrap";

const NewsLetter = () => (
  <Container fluid className="newsletter mb-5 py-5">
    <Container className=" text-start newsletter1">
      <Col>
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail updates about our latest shop and{" "}
          <span>special offers.</span>
        </p>
      </Col>

      <Form className="form " onSubmit={(e) => e.preventDefault()}>
        <Form.Control required type="text" placeholder="Your email address" />
        <button className="normal">Sign in</button>
      </Form>
    </Container>
  </Container>
);
export default NewsLetter;
