import { Alert, Badge, Container, Table } from "react-bootstrap";
import AdminRowSidebar from "./AdminRowSidebar";
import { useEffect, useState } from "react";
import {
  DeleteService,
  GetService,
  PutService,
} from "../../services/index.service";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const [successModifyMessage, setSuccessModifyMessage] = useState("");

  const handleUsers = async () => {
    const data = await GetService("http://localhost:3001/users");
    setUsers(data.content);
    console.log(data.content);
  };

  const handleDeleteUser = async (id) => {
    const data = await DeleteService(`http://localhost:3001/users/${id}`);
    if (typeof data == "string") {
      setUsers(users.filter((user) => user.id !== id));
      setErrorMessage({});
    } else {
      setErrorMessage(data);
    }
  };
  const handleModifyUserRole = async (id) => {
    const data = await PutService(`http://localhost:3001/users/${id}/admin`);
    if (typeof data == "string") {
      setErrorMessage({ data });
      setSuccessModifyMessage("");
    } else if (data) {
      setErrorMessage({});
      setSuccessModifyMessage("Ruolo modificato con successo");
      setTimeout(() => {
        setSuccessModifyMessage("");
      }, 1500);
      handleUsers();
    }
  };

  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <Container>
      <AdminRowSidebar />
      <div className="d-flex justify-content-center mt-5 ">
        <h4 className="me-4">All Users</h4>
        <div>
          <Badge pill variant="primary" className="me-4 p-2">
            {users.length} users
          </Badge>
        </div>
      </div>
      <div className="table-responsive ">
        <Table striped bordered hover>
          <thead className="align-middle table-dark ">
            <tr>
              <th></th>
              <th>User ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {errorMessage.message && (
              <tr>
                <td colSpan="10">
                  <Alert className="my-2 text-center" variant="danger">
                    {errorMessage.message}
                  </Alert>
                </td>
              </tr>
            )}
            {errorMessage.data && (
              <tr>
                <td colSpan="10">
                  <Alert className="my-2 text-center" variant="danger">
                    {errorMessage.data}
                  </Alert>
                </td>
              </tr>
            )}
            {successModifyMessage && (
              <tr>
                <td colSpan="10">
                  <Alert className="my-2 text-center" variant="success">
                    {successModifyMessage}
                  </Alert>
                </td>
              </tr>
            )}
            {users.map((user, index) => (
              <tr key={user.id} className="align-middle">
                <td className="text-center px-3">{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-person-gear text-warning me-1 me-sm-2 modify

"
                    viewBox="0 0 16 16"
                    onClick={() => handleModifyUserRole(user?.id)}
                  >
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-trash3 text-danger delete"
                    viewBox="0 0 16 16"
                    onClick={() => handleDeleteUser(user?.id)}
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

export default AdminUsers;
