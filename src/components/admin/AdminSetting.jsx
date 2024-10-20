import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AdminRowSidebar from "./AdminRowSidebar";
import { useNavigate } from "react-router-dom";

const AdminSetting = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-5 admin-setting ">
        <AdminRowSidebar/>
      <h1 className="text-center mb-5 mt-4 display-4">Admin Dashboard</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="custom-card">
           <div className="img">
            <Card.Img
              variant="top"
              src="https://media.gettyimages.com/id/1392983528/it/foto/clothes.jpg?s=612x612&w=gi&k=20&c=o2pwXPTmJyCh4aAe1fanl9v5vVJ2bLgBqiEjmzqiAc8="
              className="custom-image"
            /></div>
            <Card.Body className="text-center">
              <Card.Title>Create Product</Card.Title>
              <Button variant="success" className="custom-button mt-3"onClick={()=> navigate("/CreateProduct")}>
                Go to Create Product
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="custom-card">
           <div className="img">
            <Card.Img
              variant="top"
              src="https://printify.com/wp-content/uploads/2020/09/product-customization-personalization.png"
              className="custom-image object-fit-cover"
            /></div>
            <Card.Body className="text-center">
              <Card.Title>Edit Product</Card.Title>
              <Button variant="success" className="custom-button mt-3"onClick={()=> navigate("/Product")}>
                Go to Edit Product
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="custom-card">
           <div className="img">
            <Card.Img
              variant="top"
              src="https://cdn.icon-icons.com/icons2/20/PNG/256/business_application_addmale_useradd_insert_add_user_client_2312.png"
              className="custom-image"
            /></div>
            <Card.Body className="text-center">
              <Card.Title>Add Admin User</Card.Title>
              <Button variant="success" className="custom-button mt-3" onClick={()=> navigate("/Users")}>
                Go to Add Admin
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
        <Row >
       
        <Col md={4} className="mb-4">
          <Card className="custom-card">
           <div className="img">
            <Card.Img
              variant="top"
              src="https://www.fulex.com/wp-content/uploads/2020/07/AdobeStock_293082980-1024x536-1.jpeg"
              className="custom-image object-fit-cover"
            /></div>
            <Card.Body className="text-center">
              <Card.Title>Edit Order</Card.Title>
              <Button variant="success" className="custom-button mt-3"onClick={()=> navigate("/Order")}>
                Go to Edit Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>
  );
};
export default AdminSetting;
