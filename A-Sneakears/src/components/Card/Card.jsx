import React from "react";
import styles from "./Card.module.scss";

function Card({ title, price, imgUrl, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPLus = () => {
    onPlus({ title, imgUrl, price });
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img width={133} height={112} src={imgUrl} alt="#" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <button onClick={onClickPLus} className={styles.button}>
            <img
              className={styles.plus}
              src={isAdded ? "/img/bttchek.svg" : "/img/plus.svg"}
              alt="#"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
