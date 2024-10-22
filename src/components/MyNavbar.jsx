import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Nav,
  Navbar,
  Alert,
  NavDropdown,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction, resetCart, setUserAction } from "../redux/actions";
import { setCartAction } from "../redux/actions";
import { deleteOneCartAction } from "../redux/actions";
import {
  DeleteService,
  GetService,
  PostService,
  PutService,
} from "../services/index.service";

const MyNavbar = () => {
  const user = useSelector((state) => state.index.user);

  // user&&console.log(user)
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [show, setShow] = useState(false);
  // const [navLinkShow, setNavLinkShow] = useState(true);
  const [selected, setSelected] = useState(null);

  const handleClose = () => {
    setSelected(false);
    setShow(false);
  };
  const cart = useSelector((state) => state.index.cart);
  // console.log(cart);

  const handleOrder = async () => {
    if (!user) {
      alert("Devi effettuare l'accesso!!!");
    } else {
      const dataUser = await GetService("http://localhost:3001/users/me");
      const orderBody = {
        dateAdded: new Date().toLocaleDateString("en-CA"),
        status: "pending",
        total: cart
          .reduce(
            (acc, curr) => acc + parseFloat(curr.price) * curr.quantity,
            0.0
          )
          .toFixed(2),
        userId: dataUser.id,
        productId: cart.map((item) => item.id),
      };

      console.log("Body dell'ordine:", orderBody);
      const data = await PostService("http://localhost:3001/orders", orderBody);
      console.log(data);
      setShow(false);
      alert("Ordine effettuato con successo");
      dispatch(resetCart());
    }
  };

  const handleDeleteOne = async (index) => {
    console.log(cart);
    const data = await DeleteService(
      `http://localhost:3001/users/me/removeCart/${cart[index].id}`
    );
    dispatch(deleteOneCartAction(cart[index].id));
    console.log(data);
  };
  const handleDelete = async () => {
    if (selected !== null) {
      console.log(cart[selected].id);
      const data = await DeleteService(
        `http://localhost:3001/users/me/removeAllQuantity/${cart[selected].id}`
      );

      dispatch(deleteCartAction(cart[selected].id));

      setSelected(null);
    } else {
      alert("Selezionare un elemento per eliminare");
    }
  };
let dataUser;
  const findDataUser = async () => {
    dataUser = await GetService("http://localhost:3001/users/me");
    dispatch(setCartAction(dataUser.productList));
    

  };
 const addToCart = async (index) => {
  await PostService(`http://localhost:3001/users/me/addCart`, {
        id: cart[index].id,
      });

      findDataUser();
 };
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="sticky-top style-nav py-3">
      <Container fluid>
        <Navbar.Brand to="/" className="ms-5  pt-3 pt-md-0 ps-5">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto me-3">
            <NavLink className="mx-2 nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="mx-2 nav-link" to="/Shop">
              Shop
            </NavLink>
            <NavLink className="mx-2 nav-link" to="/App">
              App
            </NavLink>
            <NavLink
              // onClick={() => setNavLinkShow(false)}
              className="mx-2 nav-link w-100"
              to="/AboutUs"
            >
              About Us
            </NavLink>

            {user ? (
              <NavDropdown
                as={NavLink}
                id="nav-dropdown-dark-example"
                title={user || "Login"}
                menuVariant="light"
                className="mx-auto active nav-link"
                to="/Login"
              >
                <NavDropdown.Item
                  href="/"
                  className="ps-1"
                  onClick={() => {
                    dispatch(setUserAction(""));
                    localStorage.removeItem("token");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavLink className="mx-2 nav-link" to="/Login">
                {user ? user : "Login"}
              </NavLink>
            )}

            <NavLink className="mx-2 nav-link" onClick={handleShow} to="/Cart">
              <i className="far fa-shopping-bag"></i>
            </NavLink>
            <Modal
              className=" m-0"
              show={show}
              onHide={handleClose}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Carrello</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Col className="text-start">
                  {cart && user && cart.length > 0 ? (
                    cart.map(
                      (product, i) =>
                        product && (
                          <Card
                            key={`cardImg-${i}`}
                            className={
                              i === selected
                                ? "product-card mb-2 selected"
                                : "product-card mb-2"
                            }
                          >
                            <div
                              className="d-flex align-items-center"
                              onClick={() =>
                                selected === i
                                  ? setSelected(null)
                                  : setSelected(i)
                              }
                            >
                              <Card.Img
                                className="w-25"
                                variant="top"
                                src={product.img}
                              />
                              <Card.Text>{product.subTitle}</Card.Text>
                              <h4 className="mb-0 text-end ms-auto me-5">
                                €{product.price}
                              </h4>
                            </div>
                            <span
                              className="span1"
                              onClick={() => handleDeleteOne(i)}
                            >
                              -
                            </span>
                            <h6 className="mb-0 text-end ms-auto me-5">
                              x{product.quantity}
                            </h6>
                            <span
                              className="span2"
                              onClick={() => addToCart(i)}
                            >
                              +
                            </span>
                          </Card>
                        )
                    )
                  ) : !user ? (
                    <Alert variant={"secondary"}>Effettua l`accesso!</Alert>
                  ) : (
                    <Alert variant={"secondary"}>
                      Non ci sono articoli nel carrello!
                    </Alert>
                  )}
                  <Card>
                    <h4 className="p-4 total">
                      Totale:{" "}
                      <h3 className="d-inline-block ">
                        €
                        {user
                          ? cart?.reduce(
                                (acc, curr) =>
                                  acc + parseFloat(curr.price) * curr.quantity,
                                0.0
                              )
                              .toFixed(2)
                          : 0}
                      </h3>
                    </h4>
                  </Card>
                </Col>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="button"
                  onClick={handleOrder}
                >
                  Procedi all ordine
                </Button>
                <Button
                  variant="secondary"
                  className="eliminate-button"
                  onClick={handleDelete}
                >
                  elimina
                </Button>
              </Modal.Footer>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
