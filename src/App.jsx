import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import { setProductAction, setUserAction } from "./redux/actions";
// import productJson from "../product.json";
import { useEffect, useState } from "react";
import AdminHome from "./components/admin/AdminHome";
import AdminOrder from "./components/admin/AdminOrder";
import AdminOrderDetails from "./components/admin/AdminOrderDetails";
import AdminSetting from "./components/admin/AdminSetting";
import Registration from "./components/Registration";
import AdminCreateProduct from "./components/admin/AdminCreateProduct";
import AdminProduct from "./components/admin/AdminProduct";
import AdminModifyProduct from "./components/admin/AdminModifyProduct";
import AdminUsers from "./components/admin/AdminUsers";
import { GetProductService, GetService} from "./services/index.service";
import SuccessPage from "./components/SuccessPage";



function App() {
  // const navigate = useNavigate();
  
  const handleUser=async()=>{
    
    const user = await GetService("https://guilty-lonna-kassandra-f5292398.koyeb.app/users/me");
    
    if(typeof user=="string"){
      console.log(user)
      dispatch(setUserAction(""));
      localStorage.removeItem("token");
      // navigate("/login")
    
    }
  }
 
  const [products, setProducts] = useState([]);
 const handlePopularProduct = async () => {
    const data = await GetProductService("https://guilty-lonna-kassandra-f5292398.koyeb.app/products");
    // console.log(data)
    setProducts(data?.content);
  
    dispatch(setProductAction(data?.content));
  };
  const dispatch = useDispatch();
  console.log(products&&products)
  useEffect(() => {
    handlePopularProduct();
    handleUser();
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
          <Route path="/Product" element={<AdminProduct />} />
          <Route path="/CreateProduct" element={<AdminCreateProduct />} />
          <Route path="/ModifyProduct/:id" element={<AdminModifyProduct />} />
          <Route path="/Users" element={<AdminUsers />} />
          <Route path="/Success" element={<SuccessPage/>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
