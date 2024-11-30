import { useState } from "react";
import "/src/Components/Card/Card.scss";

export default function Card(props) {
  const { price, color, speed, isActive, onButtonClick } = props;

  let className = "card";
  className += " card_" + color;

  if (isActive) {
    className += " card_active";
  }

  function onClick() {
    onButtonClick(color);
  }

  return (
    <div className={className}>
      <header>
        <h3>Безлимитный {price}</h3>
      </header>
      <div>
        <h2>руб {price} /мес</h2>
      </div>
      <div>до {speed} Мбит/сек</div>
      <footer>Обьем трафика не ограничен</footer>
      <button onClick={onClick}>
        {isActive ? "Перейти в корзину" : "Купить"}
      </button>
    </div>
  );
}
