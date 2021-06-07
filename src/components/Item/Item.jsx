import img from "../../assets/images/item.png";
import Button from "../Button/Button";
import "./Item.scss";
export default function Item() {
  return (
    <div className="item">
      <div className="tag">new</div>
      <img src={img} alt="img" />
      <div className="detail">
        <p className="name">Sua chua chan trau</p>
        <p className="price">39.000d</p>
        <Button value="DAT HANG" />
      </div>
    </div>
  );
}
