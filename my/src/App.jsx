import Card from "./components/Card";
git 
import Drawer from "./components/Drawer"

import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "/img/boots.png",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 8490,
    imgUrl: "/img/boots2.png",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8999,
    imgUrl: "/img/boots3.png",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 10999,
    imgUrl: "/img/boots4.png",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
