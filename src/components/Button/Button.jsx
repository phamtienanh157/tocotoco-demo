import PropTypes from "prop-types";
import "./Button.scss";

Button.prototype = {
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default function Button(props) {
  const { value, className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
