import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Form,
} from "react-bootstrap";

const AdminOrderDetails = () => {
  const [order, setOrder] = useState({
    id: 1,
    dateAdded: "27/07/2021",
    dateModified:"14/09/2024",
    status: "Pending",
    customer: {
      name: "James",
      surname: "Southwell",
      email: "james.southwell@huntbee.com",
    },
    paymentMethod: "Bank Transfer",
    shippingMethod: "Flat Shipping Rate",
    total: "$155.00",
    items: [
      { name: "Canon EOS 5D", price: "$80.00" },
      { name: "iPod Nano", price: "$75.00" },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("customer")) {
      const field = name.split(".")[1];
      setOrder((prevOrder) => ({
        ...prevOrder,
        customer: {
          ...prevOrder.customer,
          [field]: value,
        },
      }));
    } 
    else if(name.startsWith("items")){
        const index = parseInt(name.split(".")[1]);
        const field = name.split(".")[2];
        const newItems = [...order.items];
        newItems[index] = {...newItems[index], [field]: value };
        setOrder((prevOrder) => ({
         ...prevOrder,
          items: newItems,
        }));
    }
    else {
      setOrder((prevOrder) => ({
        ...prevOrder,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order updated:", order);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Edit Order</h2>
      <Form>
        <Row>
          <Col md={12}>
            <Card className="mb-3">
              <Card.Header>Order Information</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="orderId" className="mb-3">
                      <Form.Label>Order ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="id"
                        value={order.id}
                        onChange={handleInputChange}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group controlId="dateAdded" className="mb-3">
                      <Form.Label>Date Added</Form.Label>
                      <Form.Control
                        type="text"
                        name="dateAdded"
                        value={order.dateAdded}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="dateAdded" className="mb-3">
                      <Form.Label>Last Modified</Form.Label>
                      <Form.Control
                        type="text"
                        name="dateModified"
                        value={order.dateModified}
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="status" className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        as="select"
                        name="status"
                        value={order.status}
                        onChange={handleInputChange}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="customerName" className="mb-3">
                      <Form.Label>Customer First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="customer.name"
                        value={order.customer.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="customerSurname" className="mb-3">
                      <Form.Label>Customer Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="customer.surname"
                        value={order.customer.surname}
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="customerEmail" className="mb-3">
                      <Form.Label>Customer Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="customer.email"
                        value={order.customer.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Header>Payment and Shipping</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="paymentMethod" className="mb-3">
                      <Form.Label>Payment Method</Form.Label>
                      <Form.Control
                        type="text"
                        name="paymentMethod"
                        value={order.paymentMethod}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="shippingMethod" className="mb-3">
                      <Form.Label>Shipping Method</Form.Label>
                      <Form.Control
                        type="text"
                        name="shippingMethod"
                        value={order.shippingMethod}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="mb-3">
          <Card.Header>Items Purchased</Card.Header>
          <Card.Body>
            {order.items.map((item, index) => (
              <Row key={index}>
                <Col md={6}>
                  <Form.Group controlId={`itemName${index}`} className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name={`items.${index}.name`}
                      value={item.name}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId={`itemPrice${index}`} className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      name={`items.${index}.price`}
                      value={item.price}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            ))}
          </Card.Body>
        </Card>

        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>Order Summary</Card.Header>
              <Card.Body>
                <Form.Group controlId="total" className="mb-3">
                  <Form.Label>Total</Form.Label>
                  <Form.Control
                    type="text"
                    name="total"
                    value={order.total}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="my-4"
          onClick={handleSubmit}
        >
          Update Order
        </Button>
      </Form>
    </Container>
  );
};
export default AdminOrderDetails;
