function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="#" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={17} src="/img/cart.svg" alt="#" />
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
