import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="divar icon" className={styles.logo} />
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
        <Link to="/dashboard" className={styles.button}>ثبت اگهی</Link>
      </div>
    </header>
  );
};

export default Header;
