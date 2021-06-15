import { useHistory } from "react-router";
import { PATH } from "../constants/paths";
import PublicLayout from "../layouts/PublicLayout";
import Menu from "../components/Menu/Menu";
export default function Order() {
  const history = useHistory();
  // go home page
  const returnHome = () => {
    history.push(PATH.HOME);
    window.location.reload();
  };

  return (
    <PublicLayout>
      <Menu returnHome={returnHome} />
    </PublicLayout>
  );
}
