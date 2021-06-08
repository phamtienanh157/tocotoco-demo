import PropTypes from "prop-types";
import "./Button.scss";

Button.prototype = {
  value: PropTypes.string,
  className: PropTypes.string,
};
export default function Button(props) {
  const { value, className } = props;
  return <button className={className}>{value}</button>;
}
