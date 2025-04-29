import { Link } from "react-router";
import { Header } from "./logo.styled";

function Logo() {
  return (
    <Header>
      <Link to={"/"}>
        <img src="./assets/logo.png" alt="logo" />
      </Link>
    </Header>
  );
}

export default Logo;
