import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import "./Header.scss";
export default function Header() {
  return (
    <header>
      <Navbar />
      <h3 className="text bold">ToCoToCo Tea</h3>
      <h2 className="text bold">
        <span>ĐẬM VỊ THIÊN NHIÊN</span>
        TRỌN VỊ HẠNH PHÚC
      </h2>
      <p className="text">
        <span>
          Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo
          nên
        </span>
        một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch – tươi.
      </p>
      <Button value="Đặt hàng ngay" />
      <div className="scroll"></div>
      <p className="text normal">Cuộn xuống</p>
    </header>
  );
}
