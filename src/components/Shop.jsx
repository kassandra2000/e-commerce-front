import AllProducts from "./AllProducts";
import Banner from "./Banner";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
const Shop = () => {
  const [count, setCount] = useState(0);
  const [subtitle, setSubtitle] = useState("");
  console.log(subtitle);

  return (
    <Container fluid className="mb-5 pb-5  shop">
      <Row className="mb-5 pb-4 ">
        <Banner />
        <div className="wrap-input-18">
          <div className="search">
            <div>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Search . . ."
              />
            </div>
          </div>
        </div>
        <AllProducts num1={count} num2={12} subtitle={subtitle} />
      </Row>
      {!subtitle&& (
        <div>
          {count > 0 && (
            <a className="a ms-2" onClick={() => setCount(count - 1)}>
              <i className="fas fa-long-arrow-alt-left"></i>
            </a>
          )}
          <a
            className="a ms-2"
            onClick={() => {
              setCount(count);
            }}
          >
            {count + 1}
          </a>
          <a
            className="a ms-2"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {count + 2}
          </a>
          <a
            className="a ms-2"
            onClick={() => {
              setCount(count + 2);
            }}
          >
            {count + 3}
          </a>
          <a
            className="a ms-2"
            onClick={() => {
              setCount(count + 3);
            }}
          >
            {count + 4}
          </a>
          <a className="a ms-2" onClick={() => setCount(count + 1)}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      )}
    </Container>
  );
};
export default Shop;
