import styles from "./Overlay.module.scss";

function Drawer({ onClose, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        <div className={styles.items}>
          {items.map((obj) => (
            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: `url(${obj.imgUrl})` }}
                className={styles.cartItemImg}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
      <div className={styles.cartTotalBlock}>
          <ul>
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.greenBtn}>
            Оформить заказ <img src="/img/arrow-left.svg" alt="arrow-left" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
