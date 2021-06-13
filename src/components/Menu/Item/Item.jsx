import PropTypes from "prop-types";
import "./Item.scss";

Item.prototype = {
  card: PropTypes.object,
  item: PropTypes.object,
  topping: PropTypes.array,
  onClick: PropTypes.func,
  handleInc: PropTypes.func,
  handleDec: PropTypes.func,
  handleAddTopping: PropTypes.func,
  handleAddToCart: PropTypes.func,
  total: PropTypes.string,
  number: PropTypes.number,
};
export default function Item(props) {
  const {
    card,
    item,
    toppings,
    onClick,
    handleInc,
    handleDec,
    handleAddTopping,
    handleAddToCart,
    total,
    number,
  } = props;
  return (
    <div className="item">
      <img src={card.image} alt="img" />
      <div className="detail">
        <p className="name">{card.name}</p>
        <div className="price--group">
          <p className="price">{card.price}đ</p>
          {card.discount !== null && (
            <p className="discount">{card.discount}đ</p>
          )}
        </div>
        <button
          className="button--plus"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => onClick(card)}
        >
          +
        </button>
        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="top d-flex justify-content-between">
                <div className="left">
                  <img src={item.image} alt="img" />
                  <div className="information">
                    <p className="name my-1">{item.name}</p>
                    <div className="price--group mt-4">
                      <p className="price">{item.price}đ</p>
                      {item.discount !== null && (
                        <p className="discount">{item.discount}đ</p>
                      )}
                    </div>
                    <p className="mx-0 my-2 fw-light">Chưa có thông tin.</p>
                    <div className="d-flex align-items-center mt-3">
                      <button className="button--plus me-3" onClick={handleDec}>
                        -
                      </button>
                      <span className="me-3">{number}</span>
                      <button className="button--plus me-4" onClick={handleInc}>
                        +
                      </button>
                      <button
                        className="total"
                        data-bs-dismiss="modal"
                        onClick={handleAddToCart}
                      >
                        + {total},000đ
                      </button>
                    </div>
                  </div>
                </div>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="bottom">
                <p className="mx-3 mt-3">Chọn topping</p>
                {toppings.map((topping) => (
                  <div
                    key={topping.id}
                    className="d-flex align-items-center ms-3 my-3"
                  >
                    <input
                      type="checkbox"
                      onChange={() => handleAddTopping(topping)}
                      checked={topping.state}
                    />
                    <p className="my-0 ms-3 fw-light">{topping.value}</p>
                    <p className="my-0 fw-light text-end ms-auto">
                      + {topping.price}đ
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
