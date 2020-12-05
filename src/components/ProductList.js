import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";
const ProductList = ({ products, fetchData }) => {
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className="product-container">
      <Container fluid>
        <Row>
          {products.length &&
            products.map((item) => (
              <Col key={item.id} lg={4} md={6} sm={6}>
                <ProductItem data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
