import { Card, Col, Row } from "react-bootstrap";

const AdminCards = ({ orders, userAdmin, simpleUsers, products }) => {
  const cardData = [
    {
      distance: orders.length,
      color: "bg-blue",
      title: "Total Order",
    },
    {
      distance: userAdmin.length,
      color: "bg-orange",
      title: "Admin",
    },
    { distance: simpleUsers.length, color: "bg-red", title: "Users" },
    { distance: products.length, color: "bg-purple", title: "Products" },
  ];

  return (
    <Row className="g-3">
      {cardData.map((card, index) => (
        <Col key={index} xs={12} md={6}>
          <Card className={`text-white ${card.color} py-5 `}>
            <Card.Body className="py-5">
              <Card.Title className="display-4">{card.distance}</Card.Title>
              <Card.Text className="pb-3">{card.title}</Card.Text>
              <div className="wavy-line"></div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AdminCards;
