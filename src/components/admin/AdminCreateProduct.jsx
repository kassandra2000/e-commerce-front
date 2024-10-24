import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { PostImgService, PostService } from "../../services/index.service";
import { useNavigate } from "react-router-dom";
import AdminRowSidebar from "./AdminRowSidebar";

const AdminCreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    price: "",
    stock: "",
  });
  const [formDataImg, setFormDataImg] = useState(new FormData()); // inizializza come FormData
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === "img" && files.length > 0) {

      const updatedFormData = new FormData();
      updatedFormData.append("img", files[0]); 
      setFormDataImg(updatedFormData); 
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    console.log("Product Data img:", formDataImg);

    try {
   
      const data = await PostService("https://guilty-lonna-kassandra-f5292398.koyeb.app/products/add", formData);

    
      if (data.productId) {
        const dataImg = await PostImgService(
          `https://guilty-lonna-kassandra-f5292398.koyeb.app/products/${data.productId}/img`,
          formDataImg 
        );
        console.log("Product Data img:", dataImg);

        if (dataImg.img) {
          setSuccessMessage("Creazione prodotto effettuata con successo!");
          setErrorMessage("");
         
          setTimeout(() => {
            navigate("/settings");
          }, 1000);
        }
      } else {
        setErrorMessage(data.message || "Creazione prodotto fallita. Riprova.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Errore durante la creazione del prodotto. Riprova.");
    }
  };

  return (
    <>
      <Container>
        <AdminRowSidebar />
        <Container className="my-3 w-50 border rounded p-5">
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <h3 className="fs-2 mb-4">Create a New Product</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formTitle" className="mb-3">
              <Form.Label column sm="2">
                Title
              </Form.Label>
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
              <Form.Label column sm="2">
                Subtitle
              </Form.Label>
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
              <Form.Label column sm="2">
                Image
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="file"
                  name="img"
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPrice" className="mb-3">
              <Form.Label column sm="2">
                Price
              </Form.Label>
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

            <Form.Group as={Row} controlId="formStock" className="mb-3">
              <Form.Label column sm="2">
                Stock
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Enter stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </Col>
            </Form.Group>

            <Button variant="success" type="submit">
              Create Product
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default AdminCreateProduct;
