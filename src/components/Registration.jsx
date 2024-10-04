import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {  PostService} from "../services/index.service";

const Registration = () => {
  const [formData, setFormData] = useState({
    username:"",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const data = await PostService("http://localhost:3001/auth/register",formData);
    console.log(data)
   
  };

  return (
    <Container className="my-5 d-flex flex-column justify-content-center align-items-center  registration w-50 border rounded">
      <h2 className="mb-5"> Registration</h2>
      <Form onSubmit={handleSubmit} className="w-50 ">
      <Form.Group controlId="formname">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formname">
          <Form.Label className="mt-3">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formsurname">
          <Form.Label className="mt-3">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="mt-3">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Register
        </Button>
      </Form>
    </Container>
  );
};
export default Registration;
