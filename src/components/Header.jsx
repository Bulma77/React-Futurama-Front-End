import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Futurama" />
      </Link>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/info"> Info</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/episodes">Episodes</Link>
      </nav>
    </header>
  );
};
export default Header;
