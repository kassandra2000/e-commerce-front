import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AdminCreateProduct=({title, button})=>{
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        img: '',
        price: '',
        quantity: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Data:', formData);
        
      };
    
      return (
        <Container className="my-5 w-50  border rounded p-5">
          <h3 className="fs-2 mb-4">{title}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formTitle" className="mb-3">
              <Form.Label column sm="2">Title</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter product title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} controlId="formSubtitle" className="mb-3">
              <Form.Label column sm="2">Subtitle</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter product subtitle"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} controlId="formImgUrl" className="mb-3">
              <Form.Label column sm="2">Image </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="file"
                  name="img"
                  value={formData.img}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} controlId="formPrice" className="mb-3">
              <Form.Label column sm="2">Price</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Enter product price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} controlId="formQuantity" className="mb-3">
              <Form.Label column sm="2">Quantity</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </Col>
            </Form.Group>
    
            <Button variant="success" type="submit">
              {button}
            </Button>
          </Form>
        </Container>
      );
}

export default AdminCreateProduct;