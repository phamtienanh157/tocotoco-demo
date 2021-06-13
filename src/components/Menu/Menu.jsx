import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCardsApi } from "../../apis/cards.api.js";
import { PATH } from "../../constants/paths";
import logo from "../../assets/images/logo.png";
import Item from "./Item/Item";
import Card from "./Card/Card";
import "./Menu.scss";
export default function Menu() {
  // list item include many objects
  const [cards, setCards] = useState([]);
  // 1 object about 1 item
  const [item, setItem] = useState({});
  // number of item
  const [number, setNumber] = useState();
  // total of money
  const [total, setTotal] = useState();
  // toping
  const [toppings, setToppings] = useState([
    {
      id: 1,
      value: "Thêm Trân Châu Sương Mai",
      price: "9,000",
      state: false,
    },
    {
      id: 2,
      value: "Thêm Thạch Băng Tuyết",
      price: "8,000",
      state: false,
    },
    {
      id: 3,
      value: "Thêm Trân Châu Hoàng Kim",
      price: "9,000",
      state: false,
    },
    {
      id: 4,
      value: "Thêm Machiato",
      price: "9,000",
      state: false,
    },
  ]);
  // cart
  const [cart, setCart] = useState([]);
  // console.log(item);
  // console.log(number);
  // console.log(total);
  const history = useHistory();

  // get api and set data into "cards"
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

  // return Home page
  const returnHome = () => {
    history.push(PATH.HOME);
    window.location.reload();
  };

  // get index of item in "cards" when click a item
  const getIndex = (item) => {
    const list = [...cards];
    const index = list.indexOf(item);
    setItem(list[index]);
    setNumber(1);
    setTotal(parseInt(list[index].price));
  };

  // increase number of item when click "+"
  const handleInc = () => {
    setNumber(number + 1);
    setTotal((number + 1) * parseInt(item.price));
  };

  // decrease number of item when click "-"
  const handleDec = () => {
    if (number > 1) {
      setNumber(number - 1);
      setTotal((number - 1) * parseInt(item.price));
    }
  };
  // handle add topping and handle total price
  const handleAddTopping = (topping) => {
    const list = [...toppings];
    const index = list.indexOf(topping);
    if (list[index].state === false)
      setTotal(total + parseInt(list[index].price));
    else setTotal(total - parseInt(list[index].price));
    list[index].state = !list[index].state;
    setToppings(list);
  };

  const handleAddToCart = () => {
    const list = [...cart];
    const object = {
      id: list.length + 1,
      name: item.name,
      price: item.price,
      number: number,
      total: total,
    };
    list.push(object);
    setCart(list);
  };
  const totalNumber = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.number;
  }, 0);
  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total;
  }, 0);
  const handleDeleteAll = () => {
    setCart([]);
  };
  return (
    <div>
      <header>
        <img src={logo} alt="logo" onClick={returnHome} />
        <input type="text" placeholder="Tìm kiếm sản phẩm" />
        <button onClick={() => alert("Tinh nang nay hien chua co")}>
          Đăng nhập
        </button>
      </header>
      <div className="row d-flex justify-content-center">
        <section className="menu">
          <p>Món nổi bật</p>
          <div className="content">
            {cards.map((card) => (
              <Item
                key={card.id}
                card={card}
                item={item}
                toppings={toppings}
                onClick={getIndex}
                handleInc={handleInc}
                handleDec={handleDec}
                handleAddTopping={handleAddTopping}
                handleAddToCart={handleAddToCart}
                total={total}
                number={number}
              />
            ))}
          </div>
        </section>
        <Card
          cart={cart}
          totalNumber={totalNumber}
          totalPrice={totalPrice}
          handleDeleteAll={handleDeleteAll}
        />
      </div>
    </div>
  );
}
