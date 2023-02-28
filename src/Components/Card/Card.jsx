import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
function Card({ item, onAdd, onRemove, isCat}) {
  const [count, setCount] = useState(0);
  const { title, image, price } = item;
  let cardType;
  let imageType;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(item);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(item);
  };

  if (isCat) {
    imageType = (
      <button className="image__button">
        <img src={image} alt={title} />
      </button>
    );
    cardType = (
      <>
        <h4 className="card__title">
          {title}
        </h4>
      </>
    );
  } else {
    imageType = (
      <div className="image__container">
        <img src={image} alt={title} />
      </div>
    );
    cardType = (
      <>
        <h4 className="card__title">
          {title} . <span className="card__price">$ {price}</span>
        </h4>

        <div className="btn-container">
          <Button title={"+"} type={"add"} onClick={handleIncrement} /> {count !== 0 ? ( 
            <Button title={"-"} type={"remove"} onClick={handleDecrement} />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      {imageType}
      {cardType}
    </div>
  );
}

export default Card;
