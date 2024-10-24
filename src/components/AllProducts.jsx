import { Container, Row } from "react-bootstrap";
import Product from "./Product";

import { GetProductService } from "../services/index.service";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProductAction } from "../redux/actions";

const AllProducts = ({ text1, text2,num1,num2 }) => {
  const dispatch=useDispatch()
  const [products, setProducts]=useState([])
  const handleProduct=async()=>{
    const data = await GetProductService(`http://localhost:3001/products?page=${num1}&size=${num2}`);
    console.log(products)
    setProducts(data?.content);
    dispatch(setProductAction(data?.content))
  }
useEffect(()=>{
  handleProduct()
},[num1])

  
  return (
    <>
      <h2>{text1}</h2>
      <p className="mb-5">{text2}</p>

      <Container>
        <Row className="row-cols-1 px-5 px-sm-0 mx-5 mx-sm-0  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {products?.map((element, i) => (
            <Product index={i} key={element.id} products/>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default AllProducts;
