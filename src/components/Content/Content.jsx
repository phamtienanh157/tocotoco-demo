import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCardsApi } from "../../apis/cards.api.js";
import { TEXT } from "../../constants/texts";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Banner from "../Banner/Banner";
import image_about_us from "../../assets/images/banner_about_us.png";
import image_franchise from "../../assets/images/franchise.png";
import "./Content.scss";

Content.prototype = {
  goOrderPage: PropTypes.func,
};
export default function Content(props) {
  const { goOrderPage } = props;

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
        {cards
          .filter((card) => card.id < 9)
          .map((card) => (
            <Card
              key={card.id}
              card={card}
              value="ĐẶT HÀNG"
              onClick={goOrderPage}
            />
          ))}
      </section>
      <div className="button">
        <Button
          value="XEM TẤT CẢ"
          className="button--yellow"
          onClick={goOrderPage}
        />
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
