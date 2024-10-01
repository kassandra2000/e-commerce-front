import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import AdminStatisticCard from "./AdminStatisticCard";
import { FaBriefcase } from "react-icons/fa";
import { FcApproval } from "react-icons/fc"
import { FcEmptyFilter } from "react-icons/fc";
import { FcRegisteredTrademark } from "react-icons/fc";


const AdminDashboard = () => (
  <Container fluid>
    <InputGroup className="w-25 mt-4 " >
      <FormControl className="rounded-pill" placeholder="Search..." />
    </InputGroup>

    <Row className="mb-4 ">
      <Col xs={12} md={6}  className="gy-4">
        <AdminStatisticCard
          icon={<FaBriefcase />}
          value="2559+"
          label=" Progress"
          percentage={82}
          color={"blue"}
        />
      </Col>
      <Col xs={12} md={6}  className="gy-4">
        <AdminStatisticCard
          icon={<FcApproval />}
          value="2559+"
          label="Confirm"
          percentage={32}
          color={"green"}
        />
      </Col>
      <Col xs={12} md={6}  className="gy-4">
        <AdminStatisticCard
          icon={<FcEmptyFilter />}
          value="2559+"
          label="Pending"
          percentage={62}
          color={"#ffc927"}
          
        />
      </Col>
      <Col xs={12} md={6}  className="gy-4">
        <AdminStatisticCard
          icon={<FcRegisteredTrademark />}
          value="2559+"
          label="Recording"
          percentage={10}
          color={"purple"}
        />
      </Col>
      
    </Row>
  </Container>
);

export default AdminDashboard;
