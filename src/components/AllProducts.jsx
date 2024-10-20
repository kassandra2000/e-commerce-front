import { Container, Row } from "react-bootstrap";
import Product from "./Product";
import { useSelector } from "react-redux";

const AllProducts = ({ text1, text2 }) => {
  const products = useSelector((state) => state.index.product);
 
  return (
    <>
      <h2>{text1}</h2>
      <p className="mb-5">{text2}</p>

      <Container>
        <Row className="row-cols-1 px-5 px-sm-0 mx-5 mx-sm-0  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {products.map((element, i) => (
            <Product index={i} key={element.id} />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default AllProducts;
