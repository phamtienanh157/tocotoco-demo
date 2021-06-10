import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCardsApi } from "../../apis/cards.api.js";
import { PATH } from "../../constants/paths";
import Item from "./Item/Item";
import tea from "../../assets/images/icon-glass-tea.png";
import logo from "../../assets/images/logo.png";
import "./Menu.scss";
export default function Menu() {
  const [cards, setCards] = useState([]);
  const [item, setItem] = useState({});

  const history = useHistory();

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

  const returnHome = () => {
    history.push(PATH.HOME);
    window.location.reload();
  };
  const getIndex = (item) => {
    const list = [...cards];
    const index = list.indexOf(item);
    setItem(list[index]);
  };
  return (
    <div>
      <header>
        <img src={logo} alt="logo" onClick={returnHome} />
        <input type="text" placeholder="Tìm kiếm sản phẩm" />
        <button>Đăng nhập</button>
      </header>
      <div className="row d-flex justify-content-center">
        <section className="menu">
          <p>Món nổi bật</p>
          <div className="content">
            {cards.map((card) => (
              <Item key={card.id} card={card} item={item} onClick={getIndex} />
            ))}
          </div>
        </section>
        <section className="cart">
          <div className="title">
            <p>Giỏ hàng của tôi</p>
            <p>Xóa tất cả</p>
          </div>
          <div className="content">
            <p>Chưa có sản phẩm nào!</p>
            <div className="total">
              <img src={tea} alt="tea" />
              <span>x</span>
              <span className="brown">1</span>
              <span>=</span>
              <span className="brown">0đ</span>
            </div>
            <button>Thanh toán</button>
          </div>
        </section>
      </div>
    </div>
  );
}
