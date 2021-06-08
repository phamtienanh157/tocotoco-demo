import Button from "../Button/Button";
import "./Card.scss";

export default function Card(props) {
  const { card } = props;
  return (
    <div className="item">
      <div className="tag">new</div>
      <img src={card.image} alt="img" />
      <div className="detail">
        <p className="name">{card.name}</p>
        <div className="price--group">
          <p className="price">{card.price}</p>
          <p className="discount">{card.discount}</p>
        </div>
        <div className="button">
          <Button value="ĐẶT HÀNG" className="button--yellow" />
        </div>
      </div>
    </div>
  );
}
