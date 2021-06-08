import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Banner.scss";

Banner.prototype = {
  image: PropTypes.string,
  children: PropTypes.element,
  description: PropTypes.string,
  className: PropTypes.string,
};
export default function Banner(props) {
  const { image, children, description, className } = props;
  return (
    <div className={`banner__container ${className}`}>
      <img src={image} alt="bg" />
      <div className="banner__text">
        {children}
        <p className="description">{description}</p>
        <Button value="XEM THÊM" className="button--yellow" />
      </div>
    </div>
  );
}
