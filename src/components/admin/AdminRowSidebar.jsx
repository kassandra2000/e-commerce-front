import { Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AdminRowSidebar = () => (
  <div className="d-flex bg-light pt-xs-3 mt-5  justify-content-center align-items-center  ">
    <Nav defaultActiveKey="/dashboard" className="gap-3  py-4 justify-content-center gap-md-4 fs-5 admin-row-sidebar">
      <NavLink className="side-bar " to="/admin">
        Dashboard
      </NavLink>
    
      <NavLink className="side-bar " to="/order">
        Order
      </NavLink>
      <NavLink className="side-bar " to="/settings">
        Setting
      </NavLink>
      <NavLink className="side-bar " to="/user">
        User
      </NavLink>
    </Nav>
  </div>
);

export default AdminRowSidebar;