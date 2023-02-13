import React from "react";
import { Button, Card } from "react-bootstrap";

function ReactBootstrap() {
  return (
    <>
      <Card style={{ width: "300px" }} className="shadow rounded">
        <Card.Img
          className="img-fluid"
          src="https://static.toiimg.com/photo/84917454.cms"
        />
        <Card.Title>card title</Card.Title>
        <Card.Text>sasasasasasas</Card.Text>
        <Button variant="success" className="mb-3 mx-5 text-capitalize">
          read more
        </Button>
      </Card>
    </>
  );
}

export default ReactBootstrap;
