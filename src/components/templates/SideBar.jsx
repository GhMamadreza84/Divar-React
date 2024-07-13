
import styles from "./SideBar.module.css"
const SideBar = ({categories}) => {

  return (
    <div className={styles.sidebar}>
      <h4>دسته ها </h4>
      {categories?.data.map((category) => (
        <li key={category._id}>
          <img src={`${category.icon}.svg`}  />
          <p>{category.name}</p>
        </li>
      ))}
    </div>
  );
};

export default SideBar;
