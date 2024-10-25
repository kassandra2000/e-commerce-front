import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import f3 from "../assets/products/f3.jpg";
import f4 from "../assets/products/f4.jpg";
import f5 from "../assets/products/f5.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartAction } from "../redux/actions";
import { GetService, PostService } from "../services/index.service";
const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);
  const details = useSelector((state) => state.index.details);
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(details?.img);
  const images = [details?.img, f3, f4, f5];
  const user = useSelector((state) => state.index.user);

  const findDataUser = async () => {
    const data = await GetService("http://localhost:3001/users/me");

    dispatch(setCartAction(data.productList));
  };
  useEffect(() => {
    findDataUser();
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const addToCart = async () => {
    await PostService(`http://localhost:3001/users/me/addCart`, {
      id: details?.id,
    });
    user ? alert("aggiunto carello") : alert("esegui l'accesso!");
  };
  return (
    <Container className="my-5 details">
      <Row>
        <Col md={6}>
          <img src={mainImage} alt="na" className="img-fluid" />

          <Row className="mt-3">
            {images.map((image, i) => (
              <Col xs={3} key={i}>
                <img
                  src={image}
                  alt={`Thumbnail ${i + 1}`}
                  className={`img-fluid little-img ${
                    i === selected ? "selected" : ""
                  }`}
                  onClick={() => {
                    setMainImage(image);
                    setSelected(i);
                  }}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <Card className="border-0  mt-4 mt-md-0">
            <Card.Body>
              <Card.Title>{details?.title}</Card.Title>
              <div className="d-flex align-items-end justify-content-center">
                <Form.Group controlId="sizeSelect" className="mt-2 w-25 ">
                  <Form.Label className="mb-3">Select Size</Form.Label>
                  <Form.Control as="select" className="  w-50 mx-auto">
                    <option value={"XS"}>{"XS"}</option>
                    <option value={"S"}>{"S"}</option>
                    <option value={"M"}>{"M"}</option>
                    <option value={"L"}>{"L"}</option>
                    <option value={"XL"}>{"XL"}</option>
                    <option value={"XXL"}>{"XXL"}</option>
                  </Form.Control>
                </Form.Group>
                <Card.Subtitle>{details?.price}€</Card.Subtitle>
              </div>
              <div className="d-flex align-items-end justify-content-center mt-4">
                <Form.Group controlId="quantity" className="w-25 me-3">
                  <Form.Label className="">Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                  />
                </Form.Group>
                <Button className="w-25 btn " onClick={addToCart}>
                  Add To Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className=" border-0">
            <Card.Body className=" pt-0">
              <Card.Title>{details?.subTitle}</Card.Title>
              <Card.Text>
                The Gildan Ultra Cotton T-shirt is made from a substantial 6.0
                oz. per sq. yd. fabric constructed from 100% cotton, this
                classic fit preshrunk jersey knit provides unmatched comfort
                with each wear. Featuring a taped neck and shoulder, and a
                seamless double-needle collar, and available in a range of
                colors, it offers it all in the ultimate head-turning package.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
