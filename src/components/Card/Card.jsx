import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Card.scss";

Card.prototype = {
  card: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
export default function Card(props) {
  const { card, className, value, onClick } = props;
  return (
    <div className={`item ${className}`}>
      <div className="tag">new</div>
      <img src={card.image} alt="img" />
      <div className="detail">
        <p className="name">{card.name}</p>
        <div className="price--group">
          <p className="price">{card.price}</p>
          <p className="discount">{card.discount}</p>
        </div>
        <div
          className="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Button value={value} className="button--yellow" onClick={onClick} />
        </div>
        <div class="modal fade" id="exampleModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <button class="btn-close" data-bs-dismiss="modal"></button>
              <div class="modal-body">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
