import React from "react";
import image from "./Utilities/header_image.png";
import Button from "react-bootstrap/Button";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  float: "right",
  margin: "0.5rem",
  lineHeight: "2rem",
  fontWeight: "bold",
  width: "8rem",
  height: "8rem",
};

const Cart = () => {
  return (
    <div> 
      <div>
        <h6>SKY AND SPARROW Ditsy Open Back Dress</h6>
        <img
          src={image}
          alt="image"
          style={{ width: "40%", height: "12rem" }}
        />
        <span className="span-details" style={styles}>
          Color: Bluco
          <br />
          Size: S <br />
          Quantity: 1 <br />
          Rs. 299
        </span>
      </div>
      <hr
        style={{
          border: "none",
          height: "5px",
          backgroundColor: "#000",
          fontWeight: "bold",
        }}
      />
      <div
        className="d-flex justify-content-between"
        style={{ fontWeight: "bold", fontSize: "1rem" }}
      >
        <p>Subtotal (1 item) </p>
        <p>Rs. 299</p>
      </div>
      <div>
        <Button size="lg" style={{ width: "100%" }}>
          Proceed to Pay
        </Button>
      </div>
    </div>
  );
};

export default Cart;
