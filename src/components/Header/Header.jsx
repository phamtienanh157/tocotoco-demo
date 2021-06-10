import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import "./Header.scss";

Header.prototype = {
  goOrderPage: PropTypes.func,
};
export default function Header(props) {
  const { goOrderPage } = props;

  return (
    <header>
      <Navbar />
      <section className="content">
        <h3 className="text bold">ToCoToCo Tea</h3>
        <h2 className="text bold">
          ĐẬM VỊ THIÊN NHIÊN
          <br />
          TRỌN VỊ HẠNH PHÚC
        </h2>
        <p className="text">
          Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo
          nên <br /> một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch –
          tươi.
        </p>
      </section>
      <div className="button">
        <Button
          value="Đặt hàng ngay"
          className="button--white"
          onClick={goOrderPage}
        />
      </div>
      <div className="scroll"></div>
      <p className="text normal">Cuộn xuống</p>
    </header>
  );
}
