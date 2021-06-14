import logo from "../../assets/images/logo.png";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="logo" />
        <ul className="menu">
          <li className="menu--item active">
            <a href="/">Trang chủ</a>
          </li>
          <li className="menu--item">
            <a href="/">Giới thiệu</a>
            <i className="fa fa-angle-down"></i>
          </li>
          <li className="menu--item">
            <a href="/order">Sản phẩm</a>
          </li>
          <li className="menu--item">
            <a href="/">Tin tức</a>
            <i className="fa fa-angle-down"></i>
          </li>
          <li className="menu--item">
            <a href="/">Cửa hàng</a>
          </li>
          <li className="menu--item">
            <a href="/">Tuyển dụng</a>
          </li>
          <li className="menu--item">
            <a href="/">Nhượng quyền</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <i className="fa fa-search"></i>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
}
