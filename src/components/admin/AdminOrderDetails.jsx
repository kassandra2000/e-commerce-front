import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Form,
  Alert,
} from "react-bootstrap";
import {   useNavigate, useParams } from "react-router-dom";
import { GetService, PutService } from "../../services/index.service";

const AdminOrderDetails = () => {
  const [order, setOrder] = useState({
    id: "",
    dateAdded: "",
    dateModified: "",
    status: "",
    user: {
      name: "",
      surname: "",
      email: "",
    },
    total: "",
    productList: [],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  let data;
  const [errorModifyMessage, setErrorModifyMessage] = useState("");
  const [successModifyMessage, setSuccessModifyMessage] = useState("");
  const navigate = useNavigate();

  const handleModifyOrder = async () => {
    data = await GetService(`http://localhost:3001/orders/${id}`);
    if (typeof data === "string") {
      setErrorMessage(data);
    } else {
      setErrorMessage("");
    }
    setOrder(data);
  };

  useEffect(() => {
    handleModifyOrder();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("user")) {
      const field = name.split(".")[1];
      setOrder((prevOrder) => ({
        ...prevOrder,
        user: {
          ...prevOrder?.user,
          [field]: value,
        },
      }));
    } else if (name.startsWith("productList")) {
      const index = parseInt(name.split(".")[1]);
      const field = name.split(".")[2];
      const newProductList = [...order.productList];
      newProductList[index] = { ...newProductList[index], [field]: value };
      setOrder((prevOrder) => ({
        ...prevOrder,
        productList: newProductList,
      }));
    } else {
      setOrder((prevOrder) => ({
        ...prevOrder,
        [name]: value,
      }));
    }
  };

  const transformedOrder = {
    dateAdded: order.dateAdded,
    status: order.status,
    total: ""+order.total,
    userId: order.user.id,
    productId: order.productList.map(item => item.id), 
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const dataModified = await PutService(
      `http://localhost:3001/orders/${id}`,
      transformedOrder
    );
    console.log(dataModified)
    setSuccessModifyMessage("Ordine modificato con sucesso!");

    setErrorModifyMessage("");
    if (typeof dataModified === "string") {
      setErrorModifyMessage(dataModified);
      setSuccessModifyMessage("");
    }else{
      setTimeout(() => {
        navigate("/Admin");
      }, 1000);
    }
    
  };

  return (
    <>
      {errorMessage ? (
        <Alert className="my-5" variant="danger">
          {errorMessage}
        </Alert>
      ) : (
        <Container className="mt-5">
          <h2 className="mb-4">Edit Order</h2>
          {errorModifyMessage && <Alert variant="danger">{errorModifyMessage}</Alert>}
            {successModifyMessage && (
              <Alert variant="success">{successModifyMessage}</Alert>
            )}
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
                            value={order?.id || ""}
                            onChange={handleInputChange}
                            disabled
                          />
                        </Form.Group>

                        <Form.Group controlId="dateAdded" className="mb-3">
                          <Form.Label>Date Added</Form.Label>
                          <Form.Control
                            type="text"
                            name="dateAdded"
                            value={order?.dateAdded || ""}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="dateModified" className="mb-3">
                          <Form.Label>Last Modified</Form.Label>
                          <Form.Control
                            type="text"
                            name="dateModified"
                            value={order?.dateModified || ""}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="status" className="mb-3">
                          <Form.Label>Status</Form.Label>
                          <Form.Control
                            as="select"
                            name="status"
                            value={order?.status || "PENDING"}
                            onChange={handleInputChange}
                          >
                            <option value="PENDING">Pending</option>
                            <option value="COMPLETED">Completed</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="userName" className="mb-3">
                          <Form.Label>Customer First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="user.name"
                            value={order?.user?.name || ""}
                            onChange={handleInputChange}
                            disabled
                          />
                        </Form.Group>
                        <Form.Group controlId="userSurname" className="mb-3">
                          <Form.Label>Customer Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="user.surname"
                            value={order?.user?.surname || ""}
                            onChange={handleInputChange}
                            disabled
                          />
                        </Form.Group>

                        <Form.Group controlId="userEmail" className="mb-3">
                          <Form.Label>Customer Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="user.email"
                            value={order?.user?.email || ""}
                            onChange={handleInputChange}
                            disabled
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Header>Items Purchased</Card.Header>
                  <Card.Body>
                    {order?.productList?.map((item, index) => (
                      <Row key={index}>
                        <Col md={6}>
                          <Form.Group
                            controlId={`itemTitle${index}`}
                            className="mb-3"
                          >
                            <Form.Label>Product Title</Form.Label>
                            <Form.Control
                              type="text"
                              name={`productList.${index}.title`}
                              value={item?.title || ""}
                              onChange={(e) => handleInputChange(e, index)}
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            controlId={`itemPrice${index}`}
                            className="mb-3"
                          >
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                              type="text"
                              name={`productList.${index}.price`}
                              value={item?.price || ""}
                              onChange={(e) => handleInputChange(e, index)}
                              disabled
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>Order Summary</Card.Header>
                  <Card.Body>
                    <Form.Group
                      controlId="total"
                      className="mb-3 d-flex flex-column align-items-center"
                    >
                      <Form.Label>Total</Form.Label>
                      <Form.Control
                        type="text"
                        name="total"
                        value={order?.total || ""}
                        onChange={handleInputChange}
                        className="text-center w-50"
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
      )}
    </>
  );
};

export default AdminOrderDetails;
