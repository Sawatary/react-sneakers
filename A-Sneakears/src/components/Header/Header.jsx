import styles from "./Header.module.scss";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="#" />
        <div>
          <h3 className="text-uppercase">
            React Sneakers
          </h3>
          <p className={styles.p}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex mr-15">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="#" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img
            className="mr-30"
            width={20}
            height={20}
            src="/img/love.svg"
            alt="#"
          />
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="#" />
        </li>
      </ul>
    </header>
  );
}

export default Header;