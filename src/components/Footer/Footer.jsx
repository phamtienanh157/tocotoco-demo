import logo from "../../assets/images/ft_logo.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import tick from "../../assets/images/tick.png";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="cover"></div>
      <div className="main">
        <img src={logo} alt="logo" />
        <div className="footer__box">
          <h4>công ty cp tm & dv taco việt nam</h4>
          <div className="box__line">
            <i className="fa fa-map-marker"></i>
            <p>
              Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng, Hà Nội.
            </p>
          </div>
          <div className="box__line">
            <i className="fa fa-phone"></i>
            <p>1900.63.69.36</p>
          </div>
          <div className="box__line">
            <i className="fa fa-envelope"></i>
            <p>info@tocotocotea.com</p>
          </div>
          <p className="box__line">
            Số ĐKKD: 0106341306. Ngày cấp: 16/03/2017.
          </p>
          <p className="box__line">
            Nơi cấp: Sở kế hoạch và Đầu tư Thành phố Hà Nội.
          </p>
          <div className="box__line social">
            <a href="/#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="/#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="/#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/#">
              <i className="fa fa-google-plus"></i>
            </a>
          </div>
          <div className="box__line download">
            <a href="/#">
              <img src={googleplay} alt="google-play" />
            </a>
            <a href="/#">
              <img src={appstore} alt="app-store" />
            </a>
            <a href="/#">
              <img src={tick} alt="tick" />
            </a>
          </div>
        </div>
        <div className="footer__box">
          <h4>về chúng tôi</h4>
          <ul>
            <li>
              <a href="/#">Giới thiệu về TocoToco</a>
            </li>
            <li>
              <a href="/#">Nhượng quyền</a>
            </li>
            <li>
              <a href="/#">Tin tức khuyến mại</a>
            </li>
            <li>
              <a href="/#">Cửa hàng</a>
            </li>
            <li>
              <a href="/#">Quy định chung</a>
            </li>
            <li>
              <a href="/#">TT liên hệ & ĐKKD</a>
            </li>
          </ul>
        </div>
        <div className="footer__box">
          <h4>chính sách</h4>
          <ul>
            <li>
              <a href="/#">Chính sách thành viên</a>
            </li>
            <li>
              <a href="/#">Hình thức thanh toán</a>
            </li>
            <li>
              <a href="/#">Vận chuyển giao nhận</a>
            </li>
            <li>
              <a href="/#">Đổi trả và hoàn tiền</a>
            </li>
            <li>
              <a href="/#">Bảo vệ thông tin cá nhân</a>
            </li>
            <li>
              <a href="/#">Bảo trì, bảo hành</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>
          ToCoToCo - Thương hiệu trà sữa tiên phong sử dụng nguồn nông sản Việt
          Nam
        </p>
        <p>Copyrights © 2019 by ToCoToCoTea. All rights reserved.</p>
      </div>
    </footer>
  );
}
