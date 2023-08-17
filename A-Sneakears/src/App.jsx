import React from "react";
import Card from "./components/Card";
import Overlay from "./components/Overlay/Overlay";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSeachValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://64b405a60efb99d86268ac25.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };
  const onChangeSearchInput = (event) => {
    setSeachValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Overlay items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: ${searchValue} `
              : "Все Короссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input 
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
              type="text"
              />
              {searchValue && (
                <img
                  onClick={() => setSeachValue("")}
                  className="clear cu-p"
                  src="/img/btn-remove.svg"
                  alt="Clear"
                />
              )}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onPlus={(obj) => onAddToCart(obj)}
              // onFavorite={() =>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
