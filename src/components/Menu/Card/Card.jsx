import PropTypes from "prop-types";
import tea from "../../../assets/images/icon-glass-tea.png";
import "./Card.scss";

Card.prototype = {
  cart: PropTypes.array,
  totalPrice: PropTypes.number,
  totalNumber: PropTypes.number,
  handleDeleteAll: PropTypes.func,
  handleDeleteItem: PropTypes.func,
};
export default function Card(props) {
  const { cart, totalNumber, totalPrice, handleDeleteAll, handleDeleteItem } =
    props;

  return (
    <section className="cart">
      <div className="title">
        <p>Giỏ hàng của tôi</p>
        <p onClick={handleDeleteAll}>Xóa tất cả</p>
      </div>
      <div className="content pt-3">
        {cart.length === 0 ? (
          <p>Chưa có sản phẩm nào!</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="py-2 d-flex justify-content-between align-items-center border-bottom"
            >
              <div>
                <p className="my-0 fw-bolder">{item.name} (M)</p>
                <p className="my-0 brown">
                  {item.price}đ x {item.number} = {item.total},000đ
                </p>
              </div>
              <i
                className="fa fa-close"
                onClick={() => handleDeleteItem(item.id)}
              ></i>
            </div>
          ))
        )}
        <div className="total mt-3">
          <img src={tea} alt="tea" />
          <span>x</span>
          <span className="brown">{totalNumber}</span>
          <span>=</span>
          <span className="brown">{totalPrice},000đ</span>
        </div>
        <button onClick={() => alert("Thanh toan thanh cong")}>
          Thanh toán
        </button>
      </div>
    </section>
  );
}
