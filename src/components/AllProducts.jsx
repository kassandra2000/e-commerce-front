import { Alert, Container, Row, Spinner } from "react-bootstrap";
import Product from "./Product";

import { GetProductService } from "../services/index.service";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProductAction } from "../redux/actions";

const AllProducts = ({ text1, text2, num1, num2, subtitle }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState("");
  const handleProduct = async () => {
    let data;
    if (subtitle?.length > 0) {
      data = await GetProductService(
        `http://localhost:3001/products/bySubtitle?subtitle=${subtitle}`
      );
      console.log(data);
    } else {
      data = await GetProductService(
        `http://localhost:3001/products?page=${num1}&size=${num2}`
      );
    }

    if (typeof data === "string") {
      console.log(data);
      setError(data);
      setLoad(false);
    } else {
      setError("");
      setLoad(false);
      console.log(data.content);
      if (subtitle?.length > 0) {
        setProducts(data);
        dispatch(setProductAction(data));
      } else {
        setProducts(data?.content);
        dispatch(setProductAction(data?.content));
      }
    }
  };
  useEffect(() => {
    handleProduct();
  }, [num1]);

  useEffect(() => {
    handleProduct();
  }, [subtitle]);


  return (
    <>
      <h2>{text1}</h2>
      <p className="mb-5">{text2}</p>

      <Container>
        <Row className="row-cols-1 px-5 px-sm-0 mx-5 mx-sm-0  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {products?.map((element, i) => (
            <Product index={i} key={element.id} products={products} />
          ))}
          {!load && products?.length === 0 &&!error&& (
            <Alert variant="secondary" className="w-75 mx-auto">No products found</Alert>
          )}
          {load && (
            <Spinner animation="border" variant="success" className="mx-auto" />
          )}
          {error && (
            <Alert variant={"danger"} className="mx-auto w-75">
              {error}
            </Alert>
          )}
        </Row>
      </Container>
    </>
  );
};
export default AllProducts;
