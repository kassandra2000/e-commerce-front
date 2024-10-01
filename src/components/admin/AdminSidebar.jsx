import { Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => (
  <div className="d-flex flex-column  bg-light vh-md-100 pt-xs-3 pt-md-5   ">
    <Nav defaultActiveKey="/dashboard" className=" flex-xs-row justify-content-center gap-3 flex-md-column pt-5 fs-5 admin-sidebar">
      <NavLink className="side-bar mb-4 " to="/admin">
        Dashboard
      </NavLink>
      <NavLink className="side-bar mb-4 " to="/order">
        Order
      </NavLink>
      <NavLink className="side-bar mb-4 " to="/settings">
        Setting
      </NavLink>
      <NavLink className="side-bar mb-4 " to="/user">
        User
      </NavLink>
    </Nav>
  </div>
);

export default AdminSidebar;
