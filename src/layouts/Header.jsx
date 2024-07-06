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
      <div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="profile icon" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard">ثبت اگهی</Link>
      </div>
    </header>
  );
};

export default Header;
