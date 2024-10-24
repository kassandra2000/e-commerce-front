import { Col, Container, Row } from "react-bootstrap";
import AdminCards from "./AdminCards";
import AdminDashboard from "./AdminDashboard";

import AdminSidebar from "./AdminSidebar";
import AdminDetails from "./AdminDetails";
import { GetService } from "../../services/index.service";
import { useEffect, useState } from "react";

const AdminHome = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const handlePopularOrder = async () => {
    const data = await GetService("https://guilty-lonna-kassandra-f5292398.koyeb.app/orders");
    setOrders(data.content);
    // console.log(data.content);
  };
  const handlePopularProduct = async () => {
    const data = await GetService("https://guilty-lonna-kassandra-f5292398.koyeb.app/products");
    setProducts(data.content);
    console.log(data.content);
  };
  const handleUsers = async () => {
    const data = await GetService("https://guilty-lonna-kassandra-f5292398.koyeb.app/users");
    setUsers(data.content);
    console.log(data.content);
  };

  useEffect(() => {
    handlePopularOrder();
    handlePopularProduct()
    handleUsers()
  }, []);
  const orderConfirmed = orders.filter((order) => order.status==="CONFIRMED");
  const orderPending = orders.filter((order) => order.status==="PENDING");
  const userAdmin = users.filter((user) => user.role==="ADMIN");
  const simpleUsers = users.filter((user) => user.role==="USER");
 

  return (
    <Container fluid className=" text-start ">
      <Row>
        <Col xs={12} md={3} className="  d-block">
          <AdminSidebar />
        </Col>
        <Col md={9}>
          <Container className="justify-content-center">
            <div className="w-100 text-center ">
              <AdminDashboard orders={orders} orderConfirmed={orderConfirmed} orderPending={orderPending}/>
            </div>
            <Row className=" row-cols-1 row-cols-lg-2 mb-4">
              <Col>
                <AdminCards orders={orders} userAdmin={userAdmin} 
                products={products}   simpleUsers={simpleUsers} />
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
};
export default AdminHome;
