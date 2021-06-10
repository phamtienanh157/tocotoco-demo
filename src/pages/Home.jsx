import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import { PATH } from "../constants/paths";
export default function Home() {
  const history = useHistory();
  const goOrderPage = () => {
    history.push(PATH.ORDER);
    window.location.reload();
  };
  return (
    <div>
      <Header goOrderPage={goOrderPage} />
      <Content goOrderPage={goOrderPage} />
      <Footer />
    </div>
  );
}
