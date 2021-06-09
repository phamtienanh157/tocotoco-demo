import { getCardsApi } from "../../apis/cards.api.js";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Banner from "../Banner/Banner";
import { TEXT } from "../../constants/texts";
import image_about_us from "../../assets/images/banner_about_us.png";
import image_franchise from "../../assets/images/franchise.png";
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
      <Title title="ToCoToCo Menu" subtitle="SẢN PHẨM NỔI BẬT" />
      <section className="menu">
        {cards.map((card) => (
          <Card key={card.id} card={card} value="ĐẶT HÀNG" />
        ))}
      </section>
      <div className="button">
        <Button value="XEM TẤT CẢ" className="button--yellow" />
      </div>
      <section className="banner">
        <Banner
          className="banner__about-us"
          image={image_about_us}
          description={TEXT.About_us}
        >
          <Title title="ToCoToCo Story" subtitle="về chúng tôi" />
        </Banner>
        <Banner
          className="banner__franchise"
          image={image_franchise}
          description={TEXT.Franchise}
        >
          <Title title="ToCoToCo Franchise" subtitle="nhượng quyền" />
        </Banner>
      </section>
    </div>
  );
}
