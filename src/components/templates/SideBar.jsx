import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import styles from "./SideBar.module.css"
const SideBar = () => {
  const { data } = useQuery(["get-categories"], getCategory);

  return (
    <div className={styles.sidebar}>
      <h4>دسته ها </h4>
      {data?.data.map((category) => (
        <li key={category._id}>
          <img src={`${category.icon}.svg`} alt="side-bar-icon" />
          <p>{category.name}</p>
        </li>
      ))}
    </div>
  );
};

export default SideBar;
