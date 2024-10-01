import { Card, Col, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const AdminStatisticCard = ({ icon, value, label, percentage, color }) => {
  return (
    <Card className="p-3 py-1 " style={{ borderRadius: "10px" }}>
      <Row className="py-3 ">
        <Col xs={8} md={6} lg={7} xl={8}>
          <div
            className="pb-3 text-start "
            style={{
              fontSize: "1.5rem",
              marginRight: "10px",
              color: "#6366F1",
            }}
          >
            {icon}
          </div>
          <div className="d-flex align-items-center ">
            <div className="pb-3 fs-6">
              <h5 className="mb-0">{value}</h5>
              <p className="text-muted mb-0 fs-6">{label}</p>
            </div>
          </div>
        </Col>
        <Col xs={4} md={6} lg={5} xl={4} className="d-flex justify-content-end">
          <CircularProgressbar
            percentage={percentage}
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#6366F1",
              pathColor: color,
              trailColor: "#e0e0e0",
            })}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default AdminStatisticCard;
