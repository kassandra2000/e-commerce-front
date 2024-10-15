import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAction } from "../redux/actions";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { GetService, PostService } from "../services/index.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await PostService("http://localhost:3001/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", data.accessToken);

    const user = await GetService("http://localhost:3001/users/me");
    // console.log(user?.username);

    setSuccessMessage("Login effettuato con sucesso!");

    setErrorMessage("");
    if (user?.role === "ADMIN") {
      setTimeout(() => {
        navigate("/Admin");
      }, 1000);
    } else if (data.accessToken) {
      dispatch(setUserAction(user?.username));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setErrorMessage("Invalid email or password");
      setSuccessMessage("");
      dispatch(setUserAction(""));
    }

    console.log("" + errorMessage);
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
              <Form.Group className="mb-3" controlId="formemail">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
