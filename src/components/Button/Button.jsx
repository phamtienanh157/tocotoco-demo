import "./Button.scss";
export default function Button(props) {
  const { value, className } = props;
  return <button className={className}>{value}</button>;
}
