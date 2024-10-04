import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetService } from "../../services/index.service";

const AdminOrderRow = () => {
  const [orders, setOrders] = useState([]);

  const handlePopularOrder = async () => {
    const data = await GetService("http://localhost:3001/orders");
    setOrders(data.content); // Supponendo che i dati siano in data.content
    console.log(data.content);
  };

  useEffect(() => {
    handlePopularOrder();
  }, []);

  return (
    <>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <tr key={index} className="align-middle">
            <td className="text-center">{index + 1}</td>
            <td className="d-none d-md-table-cell">{order?.dateAdded}</td>
            <td className="d-none d-md-table-cell">
              {order?.user?.username}
              <br />
              {order?.user?.email}
              
        
            </td>
            <td className="text-center">
              <span
                className={`badge ${
                  order.status === "PENDING" ? "bg-warning" : "bg-success"
                } text-dark`}
              >
                {order.status}
              </span>
            </td>
            <td>${order?.total.toFixed(2)}</td>
            <td className="d-none d-md-table-cell">
              {order?.productList.map((product, prodIndex) => (
                <div key={prodIndex}>
                  {product.title} - ${product.price.toFixed(2)}
                  <br />
                </div>
              ))}
            </td>
            <td className="d-none d-md-table-cell">Bank Transfer</td>
            <td className="d-none d-md-table-cell">Flat Shipping Rate</td>
            <td className="d-none d-sm-table-cell">{order?.dateModified}</td>
            <td className="text-center">
              <NavLink to={`/OrderDetail/${order.id}`}>
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
                className="bi bi-trash3 text-danger delete"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="9" className="text-center">
            No orders found
          </td>
        </tr>
      )}
    </>
  );
};

export default AdminOrderRow;
