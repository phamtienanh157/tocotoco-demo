import "./Button.scss";
export default function Button(props) {
  const { value } = props;
  return <button>{value}</button>;
}
