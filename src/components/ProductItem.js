import React from "react";
import { Card } from "react-bootstrap";

const ProductItem = ({ data }) => {
  return (
      <Card style={{ width: "18rem" }} className="border-info">
        <Card.Img variant="top" src={data.image_cover} />
        <Card.Body className="text-left">
          <Card.Title>{data.display_name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <div className="text-center p-3 mb-2 bg-info text-white rounded-lg font-weight-bold">
            {data.price}
          </div>
        </Card.Body>
      </Card>
  );
};

export default ProductItem;
