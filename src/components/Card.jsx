import { useState } from "react";
import Button from "./Button";

const Card = ({book}) => {
  const [quantity, setQuantity] = useState(book.quantity);
  //const [totalCost, setTotalCost] = useState(book.price * book.quantity);

//const handleQuantityChange = (newQuantity) => {
    //setQuantity(newQuantity);
    //setTotalCost(book.price * newQuantity);
  //};

  return (
    <div className="card-container">
      <div className="card-body">
      <div className="card-image">
        <img src={book.url} alt="Book"/>
      </div>
      </div>
      <div className="card-footer">
      <div>{book.name}</div>
      <div>₹{quantity > 0 ? book.price * quantity : book.price}</div>
      <Button
          style={{ background: "red" }}
          onClick={() => setQuantity((book) => book - 1)}
        >
          -
        </Button>
        {quantity}
        <Button
          style={{ background: "green" }}
          onClick={() => setQuantity((book) => book + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Card;
