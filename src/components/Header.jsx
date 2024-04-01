import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/info">
        <img src={logo} alt="Logo Futurama" />
      </Link>
      <nav>
        <Link to="/info"> Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/episodes">Episodes</Link>
      </nav>
    </header>
  );
};
export default Header;
