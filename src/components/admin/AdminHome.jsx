import { Col, Container, Row } from "react-bootstrap";
import AdminCards from "./AdminCards";
import AdminDashboard from "./AdminDashboard";

import AdminSidebar from "./AdminSidebar";
import AdminDetails from "./AdminDetails";

const AdminHome = () => (
  <Container fluid className=" text-start ">
    <Row >
      <Col xs={12} md={3} className="  d-block">
        <AdminSidebar />
      </Col>
      <Col md={9}>
        <Container className="justify-content-center">
          <div className="w-100 text-center ">
            <AdminDashboard />
          </div>
          <Row className=" row-cols-1 row-cols-lg-2 mb-4">
            <Col>
              <AdminCards />
            </Col>
            <Col>
              <AdminDetails />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);
export default AdminHome;
