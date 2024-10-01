import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    orderNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
      setSubmitted(true);
      setError(false);
     
      console.log("Form data submitted:", formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        orderNumber: "",
      });
    // } else {
    //   setError(true);
    // }
  };

  return (
    <Container fluid className="py-5 contact-form">
      <Row className="justify-content-center ">
        <Col md={8} lg={6} className="contact-form-col">
          <h2 className="text-center py-3 mt-2">Contact Us</h2>
          <p className="text-center">
            If you have any questions or issues with your order, please reach
            out to us below.
          </p>
          {submitted && (
            <Alert variant="success">
              Your message has been sent successfully!
            </Alert>
          )}
          {error && <Alert variant="danger">Please fill out all fields.</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name and Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formOrderNumber" className="mt-3">
              <Form.Label>Order Number (if applicable)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Order Number"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleChange}
                
              />
            </Form.Group>
           
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 "> Send Message</Button>
           
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactForm;
