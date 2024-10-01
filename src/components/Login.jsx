import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAction } from "../redux/actions";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "password") {
      setSuccessMessage("Login effettuato con sucesso!");

      setErrorMessage("");
      dispatch(setUserAction(username));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else if (username === "Admin" && password === "adminpassword") {
      setSuccessMessage("Login effettuato con sucesso!");

      setErrorMessage("");
      dispatch(setUserAction(username));
      setTimeout(() => {
        navigate("/Admin");
      }, 1000);
    } else {
      setErrorMessage("Invalid username or password");
      dispatch(setUserAction(""));
    }
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} className="mx-auto">
          <div className="p-4 border rounded">
            <h2 className="mb-4 text-center">Login</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>

              <div className="text-center mt-4">Or login with</div>
            
            <div className="d-flex justify-content-center my-3">
              <Button variant="outline-primary" className="me-5">
                <FaFacebook /> Facebook
              </Button>
              <Button variant="outline-danger">
                <FaGoogle /> Google
              </Button>
            </div>

            <div className="text-center mt-4">
              Not a member? <a href="/registration">Sign up now</a>
            </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
