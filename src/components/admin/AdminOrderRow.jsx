import { NavLink } from "react-router-dom";

const AdminOrderRow = () => {
  return (
    <>
      <tr className="align-middle ">
        <td className="text-center">1</td>
        <td className="d-none d-md-table-cell">14/09/2024</td>
        <td className="d-none d-md-table-cell">
          James Southwell
          <br />
          james.southwell@huntbee.com
          <br />
          (62) 4996 7595
        </td>
        <td className="text-center">
          <span className="badge bg-warning text-dark ">Pending</span>
        </td>
        <td>$155.00</td>
        <td className="d-none d-md-table-cell">
          Canon EOS 5D - $80.00 <br />
          iPod Nano - $75.00
        </td>
        <td className="d-none d-md-table-cell">Bank Transfer</td>
        <td className="d-none d-md-table-cell">Flat Shipping Rate</td>
      
        <td className="d-none d-sm-table-cell">14/09/2024</td>
        <td className="text-center ">
            <NavLink to="/OrderDetail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pen text-warning me-1 me-sm-2 modify "
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
      <tr className=" align-middle ">
        <td className="text-center">2</td>
        <td className="d-none d-md-table-cell">14/09/2024</td>
        <td className="d-none d-md-table-cell">
          Tamera Sunde
          <br />
          tamera@huntbee.com
          <br />
          0112479002
        </td>
        <td className="text-center">
          <span className="badge bg-danger">Order Modified</span>
        </td>
        <td>$1,150.0</td>
        <td className="d-none d-md-table-cell">
          HTC Touch - $1,000.00 <br />
          Headphone - $150.00
        </td>
      
        <td className="d-none d-md-table-cell">Cash On Delivery</td>
        <td className="d-none d-md-table-cell">Flat Shipping Rate</td>
        
        <td className="d-none d-sm-table-cell">14/09/2024</td>
        <td className="text-center ">
            <NavLink to="/OrderDetail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pen text-warning me-1 me-sm-2 modify "
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
      <tr className="align-middle ">
        <td className="text-center">3</td>
        <td className="d-none d-md-table-cell">14/09/2024</td>
        <td className="d-none d-md-table-cell">
          James Southwell
          <br />
          james.southwell@huntbee.com
          <br />
          (62) 4996 7595
        </td>
        <td className="text-center">
          <span className="badge bg-success text-white ">Confirmed</span>
        </td>
        <td>$155.00</td>
        <td className="d-none d-md-table-cell">
          Canon EOS 5D - $80.00 <br />
          iPod Nano - $75.00
        </td>
      
        <td className="d-none d-md-table-cell">Bank Transfer</td>
        <td className="d-none d-md-table-cell">Flat Shipping Rate</td>
        <td className="d-none d-sm-table-cell">14/09/2024</td>
        <td className="text-center ">
          <NavLink to="/OrderDetail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pen text-warning me-1 me-sm-2 modify "
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
    </>
  );
};
export default AdminOrderRow;
