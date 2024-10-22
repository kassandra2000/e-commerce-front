import { Button, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailsAction, setCartAction } from "../redux/actions";
import { GetService, PostService, PutService } from "../services/index.service";
import { useEffect, useState } from "react";

const Product = ({ index }) => {
  const products = useSelector((state) => state.index.product);
  const cart = useSelector((state) => state.index.cart);

  const dispatch = useDispatch();
  const updatedCart = cart?.find((item) => item.id === products[index].id);
  // console.log(updatedCart)
  const user = useSelector((state) => state.index.user);
  let dataUser;

  const findDataUser = async () => {
    dataUser = await GetService("http://localhost:3001/users/me");
    dispatch(setCartAction(dataUser.productList));
    

  };
  useEffect(() => {
    findDataUser();
  }, []);

  const addToCart = async () => {
    if (!user) {
      alert("Effettua l'accesso");
      return;
    }

    try {
      await PostService(`http://localhost:3001/users/me/addCart`, {
        id: products[index].id,
      });

      findDataUser();
      console.log("Product List aggiornata:", cart);
   
    } catch (error) {
      console.error("Errore durante l'aggiunta al carrello:", error);
    }
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
        {user && <div className="quantity">{updatedCart?.quantity}</div>}

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
