import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="divar icon" />
        </Link>
        <span>
          <img src="location.svg" alt="location icon" />
          <p>تهران</p>
        </span>
      </div>
    </header>
  );
};

export default Header;
