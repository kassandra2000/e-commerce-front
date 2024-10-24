import { Alert, Badge, Container, Table } from "react-bootstrap";
import AdminRowSidebar from "./AdminRowSidebar";
import { useEffect, useState } from "react";
import { DeleteService, GetService } from "../../services/index.service";
import { NavLink } from "react-router-dom";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});

  const handlePopularProduct = async () => {
    const data = await GetService("https://guilty-lonna-kassandra-f5292398.koyeb.app/products");
    setProducts(data.content);
    console.log(data.content);
  };
  const handleDeleteProduct = async (id) => {
    const data = await DeleteService(`https://guilty-lonna-kassandra-f5292398.koyeb.app/products/${id}`);
    if (typeof data == "string") {
      setProducts(products.filter((order) => order.id !== id));
      setErrorMessage({});
    } else {
      setErrorMessage(data);
    }
  };

  useEffect(() => {
    handlePopularProduct();
  }, []);

  return (
    <Container>
      <AdminRowSidebar />
      <div className="d-flex justify-content-center mt-5 ">
        <h4 className="me-4">All products</h4>
        <div>
          <Badge pill variant="primary" className="me-4 p-2">
            {products.length} products
          </Badge>
        </div>
      </div>
      <div className="table-responsive ">
        <Table striped bordered hover>
          <thead className="align-middle table-dark ">
            <tr>
              <th></th>
              <th>Product ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {errorMessage.message && (
              <tr>
                <td colSpan="10">
                  <Alert className="my-2 text-center" variant="danger">
                    {errorMessage.message }
                  </Alert>
                </td>
              </tr>
            )}
            {products.map((product, index) => (
              <tr key={product.id} className="align-middle">
                <td className="text-center px-3">{index + 1}</td>
                <td>{product.id}</td>
                <td>
                  {product.img ? (
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{ width: "50px" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>{product.title}</td>
                <td>{product.subtitle}</td>
                <td>{product.price}€</td>
                <td>{product.quantity}</td>
                <td>{product.stock}</td>
                <td>
                  <NavLink to={`/ModifyProduct/${product?.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-pen text-warning me-1 me-sm-2 modify"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </NavLink>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-trash3 text-danger delete "
                    viewBox="0 0 16 16"
                    onClick={() => handleDeleteProduct(product?.id)}
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AdminProduct;
