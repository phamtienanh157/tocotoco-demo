import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getCardsApi } from "../../apis/cards.api.js";
import "./Menu.scss";
export default function Menu() {
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
    <section>
      <div className="menu">
        <p>Món nổi bật</p>
        <div className="content">
          {cards.map((card) => (
            <Card key={card.id} card={card} className="card" value="+" />
          ))}
        </div>
      </div>
    </section>
  );
}
