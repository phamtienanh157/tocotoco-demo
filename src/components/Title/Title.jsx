import PropTypes from "prop-types";
import img_title from "../../assets/images/home_line.webp";
import "./Title.scss";

Title.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default function Title(props) {
  const { title, subtitle, className } = props;
  return (
    <div className={`title__container ${className}`}>
      <p>{title}</p>
      <h3>{subtitle}</h3>
      <img src={img_title} alt="img-title" />
    </div>
  );
}
