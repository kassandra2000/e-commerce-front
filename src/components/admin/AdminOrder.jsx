import { Badge, Container, Table } from "react-bootstrap";
import AdminOrderRow from "./AdminOrderRow";
import AdminRowSidebar from "./AdminRowSidebar";

const AdminOrder = () => {
  return (
    <Container> 
      <AdminRowSidebar />
      <div className="d-flex justify-content-center mt-5 ">
        <h4 className="me-4">All Orders</h4>
        <div>
          <Badge pill variant="primary" className="me-4 p-2">
            3 Orders
          </Badge>
          <Badge pill variant="success " className="p-2">
            $ 5,802.00
          </Badge>
        </div>
      </div>
      <div className="table-responsive ">
        <Table striped bordered hover >
          <thead className="align-middle table-dark ">
            <tr>
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
            <AdminOrderRow />
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AdminOrder;
