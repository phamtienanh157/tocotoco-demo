import img_title from "../../assets/images/home_line.webp";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { getCardsApi } from "../../apis/cards.api.js";
import { useEffect, useState } from "react";
import "./Content.scss";
export default function Content() {
  const [cards, setCards] = useState([]);

  const getData = () => {
    getCardsApi()
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="content">
      <section className="header">
        <p>ToCoToCo Menu</p>
        <h3>SẢN PHẨM NỔI BẬT</h3>
        <img src={img_title} alt="img title" />
      </section>
      <section className="menu">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </section>
      <div className="button">
        <Button value="XEM TẤT CẢ" className="button--yellow" />
      </div>
    </div>
  );
}
