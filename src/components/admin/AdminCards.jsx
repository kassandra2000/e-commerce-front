import { Card, Col, Row } from "react-bootstrap";

const AdminCards = () => {
  const cardData = [
    { distance: 1650, color: "bg-blue" },
    { distance: 1239, color: "bg-purple" },
    { distance: 850, color: "bg-red" },
    { distance: 1129, color: "bg-orange" },
  ];

  return (
    <Row className="g-3">
      {cardData.map((card, index) => (
        <Col key={index} xs={12} md={6}>
          <Card className={`text-white ${card.color} py-5 `}>
            <Card.Body className="py-5">
              <Card.Title className="display-4">{card.distance}</Card.Title>
              <Card.Text  className="pb-3">Total Distance</Card.Text>
              <div className="wavy-line"></div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AdminCards;
