import "./PublicLayout.scss";
export default function PublicLayout(props) {
  return <div className="container-fluid">{props.children}</div>;
}
