import { Button, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailsAction, setCartAction } from "../redux/actions";

const Product = ({ index }) => {
  const products = useSelector((state) => state.index.product);
  const cart = useSelector((state) => state.index.cart);
  const dispatch = useDispatch();
  const updatedCart = cart.find((item) => item.id === products[index].id);
  const user = useSelector((state) => state.index.user);

  const addToCart = () => {
    user?dispatch(setCartAction(products[index])): alert("effettua l'accesso");
  };
  return (
    <Col className="text-start">
      <Card className="product-card">
        <Link to="/Details">
          <Card.Img
            onClick={() => dispatch(getDetailsAction(products[index]))}
            variant="top"
            src={products[index].img}
          />
        </Link>
        <Card.Body className="pb-0">
          <Card.Title className="title">{products[index].title}</Card.Title>
          <Card.Text>{products[index].subTitle}</Card.Text>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </Card.Body>
        {updatedCart &&user&& <div className="quantity">{updatedCart.quantity}</div>}

        <div className="d-flex justify-content-between mb-3 ps-3 pe-4 align-items-center">
          <h4 className="mb-0">{products[index].price}</h4>
          <Button variant="link" onClick={addToCart}>
            <i className="fal fa-shopping-cart cart"></i>
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
