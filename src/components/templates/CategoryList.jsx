import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import Loader from "../modules/Loader";
import styles from "./CategoryList.module.css";
const CategoryList = () => {
  const { data, isFetching } = useQuery(["get-categories"], getCategory);
  console.log({ data, isFetching });
  return (
    <div className={styles.list}>
      {isFetching ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} alt="" />
            <h5>{i.name}</h5>
            <p>slug : {i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
