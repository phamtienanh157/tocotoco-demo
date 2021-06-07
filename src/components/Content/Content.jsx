import img_title from "../../assets/images/home_line.webp";
import Item from "../Item/Item";
import "./Content.scss";
export default function Header() {
  return (
    <div className="content">
      <section className="header">
        <p>ToCoToCo Menu</p>
        <h3>SẢN PHẨM NỔI BẬT</h3>
        <img src={img_title} alt="img_title" />
      </section>
      <section className="menu">
        <Item />
      </section>
    </div>
  );
}
