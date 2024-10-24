import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  GetService,
  PostImgService,
  PutService,
} from "../../services/index.service";
import { useNavigate, useParams } from "react-router-dom";
import AdminRowSidebar from "./AdminRowSidebar";

const AdminModifyProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    price: "",
    stock: "",
  });
  const [formDataImg, setFormDataImg] = useState(new FormData());
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    title: "",
    subtitle: "",
    price: "",
    stock: "",
    img: "",
  });
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  // console.log(products)

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img" && files.length > 0) {
      const updatedFormData = new FormData();
      updatedFormData.append("img", files[0]);
      setFormDataImg(updatedFormData);

      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(files[0]);
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

    const data = await PutService(
      `https://guilty-lonna-kassandra-f5292398.koyeb.app/products/${id}`,
      formData
    );
    console.log(id);
    const dataImg = await PostImgService(
      `https://guilty-lonna-kassandra-f5292398.koyeb.app/products/${id}/img`,
      formDataImg
    );
    // console.log("Product Data :", data);
    // console.log("Product Data img:", dataImg.id);

    if (data.id && dataImg.id) {
      setSuccessMessage("Modifica del prodotto effettuata con successo!");
      setErrorMessage("");
      console.log(data.productId);
      setTimeout(() => {
        navigate("/settings");
      }, 1000);
    } else {
      setErrorMessage(
        data.message || "Modifica del prodotto fallita. Riprova."
      );
      setSuccessMessage("");
    }
  };
  const handlePopularProduct = async () => {
    const data = await GetService(`https://guilty-lonna-kassandra-f5292398.koyeb.app/products/${id}`);
    setImagePreview(data.img || null);
    setProducts(data);
    console.log(data);
    setFormData({
      title: data.title || "",
      subtitle: data.subtitle || "",
      price: data.price || "",
      stock: data.stock || "",
    });
    const updatedFormData = new FormData();
    updatedFormData.append("img", data.img);
    setFormDataImg(updatedFormData);
  };
  useEffect(() => {
    handlePopularProduct();
  }, [id]);

  return (
    <>
      <Container>
        <AdminRowSidebar />
        <Container className="my-3 w-50  border rounded p-5 admin-modify-product">
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <h3 className="fs-2 mb-4">Modify Product</h3>
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
                  value={formData?.title}
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
                  value={formData?.subtitle}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formImgUrl" className="mb-3 ">
              <Form.Label column sm="2">
                Image{" "}
              </Form.Label>
              <Col
                sm="9"
                className="d-flex align-items-center justify-content-between "
              >
                {imagePreview && (
                  <div className="mb-2">
                    <img
                      src={imagePreview}
                      alt="Product Preview"
                      style={{
                        width: "100px",
                        height: "auto",
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                )}
                <Form.Control
                  type="file"
                  name="img"
                  onChange={handleChange}
                  required
                  className="img ms-3 "
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
                  value={formData?.price}
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
                  value={formData?.stock}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </Col>
            </Form.Group>

            <Button variant="success" type="submit">
              Modify Product
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default AdminModifyProduct;
