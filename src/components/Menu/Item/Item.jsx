import PropTypes from "prop-types";
import "./Item.scss";

Item.prototype = {
  card: PropTypes.object,
  onClick: PropTypes.func,
};
export default function Item(props) {
  const { card, item, onClick } = props;

  return (
    <div className="item">
      <img src={card.image} alt="img" />
      <div className="detail">
        <p className="name">{card.name}</p>
        <div className="price--group">
          <p className="price">{card.price}</p>
          <p className="discount">{card.discount}</p>
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
                      <p className="price">{item.price}</p>
                      <p className="discount">{item.discount}</p>
                    </div>
                    <p className="mx-0 my-2 fw-light">Chưa có thông tin.</p>
                    <div className="d-flex align-items-center mt-3">
                      <button className="button--plus me-3">-</button>
                      <span className="me-3">1</span>
                      <button className="button--plus me-4">+</button>
                      <button className="total">30000</button>
                    </div>
                  </div>
                </div>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="bottom">
                <p className="mx-3 mt-3">Chọn topping</p>
                <div className="d-flex align-items-center ms-3 my-3">
                  <input type="checkbox" />
                  <p className="my-0 ms-3 fw-light">Thêm Trân Châu Sương Mai</p>
                  <p className="my-0 fw-light text-end ms-auto">+ 9,000đ</p>
                </div>
                <div className="d-flex align-items-center ms-3 my-3">
                  <input type="checkbox" />
                  <p className="my-0 ms-3 fw-light">Thêm Trân Châu Hoàng Kim</p>
                  <p className="my-0 fw-light text-end ms-auto">+ 9,000đ</p>
                </div>
                <div className="d-flex align-items-center ms-3 my-3">
                  <input type="checkbox" />
                  <p className="my-0 ms-3 fw-light">Thêm Thạch Băng Tuyết</p>
                  <p className="my-0 fw-light text-end ms-auto">+ 9,000đ</p>
                </div>
                <div className="d-flex align-items-center ms-3 my-3">
                  <input type="checkbox" />
                  <p className="my-0 ms-3 fw-light">Thêm Machiato</p>
                  <p className="my-0 fw-light text-end ms-auto">+ 9,000đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
