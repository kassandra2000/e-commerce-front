import AllProducts from "./AllProducts";

import f1 from "../assets/products/f1.jpg";
import f2 from "../assets/products/f2.jpg";
import f3 from "../assets/products/f3.jpg";
import f4 from "../assets/products/f4.jpg";
import f5 from "../assets/products/f5.jpg";
import f6 from "../assets/products/f6.jpg";
import f7 from "../assets/products/f7.jpg";
import f8 from "../assets/products/f8.jpg";
import n1 from "../assets/products/f1.jpg";
import n2 from "../assets/products/f2.jpg";
import n3 from "../assets/products/f3.jpg";
import n4 from "../assets/products/f4.jpg";
import n5 from "../assets/products/f5.jpg";
import n6 from "../assets/products/f6.jpg";
import n7 from "../assets/products/f7.jpg";
import n8 from "../assets/products/f8.jpg";
import Banner from "./Banner";
import { Container, Row } from "react-bootstrap";

const Shop = () => {
  return (
    <Container fluid className="mb-5 pb-5  shop">
      <Row className="mb-5 pb-4 ">
        <Banner />
        <AllProducts
          f1={f1}
          f2={f2}
          f3={f3}
          f4={f4}
          f5={f5}
          f6={f6}
          f7={f7}
          f8={f8}
        />

        <AllProducts
          f1={n1}
          f2={n2}
          f3={n3}
          f4={n4}
          f5={n5}
          f6={n6}
          f7={n7}
          f8={n8}
        />
      </Row>
      <a className="a" href="#">
        1
      </a>
      <a className="a" href="#">
        2
      </a>
      <a className="a" href="#">
        <i className="fas fa-long-arrow-alt-right"></i>
      </a>
    </Container>
  );
};
export default Shop;
