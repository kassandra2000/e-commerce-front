import { Badge, Container, Table } from "react-bootstrap";
import AdminOrderRow from "./AdminOrderRow";
import AdminRowSidebar from "./AdminRowSidebar";
import { useEffect, useState } from "react";
import { GetService } from "../../services/index.service";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (orders.length > 0) {
      const total = orders.reduce((acc, order) => acc + order.total, 0);
      setTotalPrice(total.toFixed(2));
    }else{
      setTotalPrice(0);
    }
  }, [orders]);

  const handlePopularOrder = async () => {
    const data = await GetService("https://guilty-lonna-kassandra-f5292398.koyeb.app/orders");
    setOrders(data.content);
    console.log(data.content);
  };

  useEffect(() => {
    handlePopularOrder();
  }, []);
  return (
    <Container>
      <AdminRowSidebar />
      <div className="d-flex justify-content-center mt-5 ">
        <h4 className="me-4">All Orders</h4>
        <div>
          <Badge pill variant="primary" className="me-4 p-2">
            {orders.length} Orders
          </Badge>
          <Badge pill variant="success " className="p-2">
            $ {totalPrice}
          </Badge>
        </div>
      </div>
      <div className="table-responsive ">
        <Table striped bordered hover>
          <thead className="align-middle table-dark ">
            <tr>
              <th></th>
              <th>Order ID</th>
              <th className="d-none d-md-table-cell">Date Added</th>
              <th className="d-none d-md-table-cell">Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th className="d-none d-md-table-cell">Items</th>
              <th className="d-none d-md-table-cell">Payment Method</th>
              <th className="d-none d-md-table-cell">Shipping Method</th>

              <th className="d-none d-sm-table-cell">Date Modified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <AdminOrderRow orders={orders} setOrders={setOrders} />
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AdminOrder;
