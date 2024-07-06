import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
