import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Details from "./components/Details";
import MyApp from "./components/MyApp";
import { useDispatch } from "react-redux";
import { setProductAction } from "./redux/actions";
import productJson from "../product.json";
import { useEffect } from "react";
import AdminHome from "./components/admin/AdminHome";
import AdminOrder from "./components/admin/AdminOrder";
import AdminOrderDetails from "./components/admin/AdminOrderDetails";
import AdminSetting from "./components/admin/AdminSetting";
import Registration from "./components/Registration";
import AdminCreateProduct from "./components/admin/AdminCreateProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductAction(productJson));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/App" element={<MyApp />} />
          <Route path="/Admin" element={<AdminHome />} />
          <Route path="/Order" element={<AdminOrder />} />
          <Route path="/OrderDetail/:id" element={<AdminOrderDetails />} />
          <Route path="/Settings" element={<AdminSetting />} />
          <Route
            path="/CreateProduct"
            element={
              <AdminCreateProduct
                title="Create a New Product"
                button="Create Product"
              />
            }
          />
<Route
            path="/ModifyProduct"
            element={
              <AdminCreateProduct
                title="Modify Product"
                button="Modify Product"
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
