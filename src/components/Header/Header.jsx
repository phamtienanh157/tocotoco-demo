import Navbar from "../Navbar/Navbar";
import "./Header.scss";
export default function Header() {
  return (
    <header>
      <Navbar />
      <h3>ToCoToCo Tea</h3>
      <h2>
        <span>ĐẬM VỊ THIÊN NHIÊN</span>
        TRỌN VỊ HẠNH PHÚC
      </h2>
      <p>
        <span>
          Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo
          nên
        </span>
        một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch – tươi.
      </p>
    </header>
  );
}
