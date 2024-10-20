import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import AdminStatisticCard from "./AdminStatisticCard";
import { FcApproval } from "react-icons/fc";
import { FcEmptyFilter } from "react-icons/fc";

const AdminDashboard = ({ orders, orderPending, orderConfirmed }) => {
 
  return (
    <Container fluid>
      <InputGroup className="w-25 mt-4 ">
        <FormControl className="rounded-pill" placeholder="Search..." />
      </InputGroup>

      <Row className="mb-4 ">
        <Col xs={12} md={6} className="gy-4">
          <AdminStatisticCard
            icon={<FcApproval />}
            value={orderConfirmed.length + "+"}
            label="Confirm"
            percentage={
              (orderConfirmed.length / orders.length).toFixed(2) * 100
            }
            color={"green"}
          />
        </Col>
        <Col xs={12} md={6} className="gy-4">
          <AdminStatisticCard
            icon={<FcEmptyFilter />}
            value={orderPending.length + "+"}
            label="Pending"
            percentage={(orderPending.length / orders.length).toFixed(2) * 100}
            color={"#ffc927"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
