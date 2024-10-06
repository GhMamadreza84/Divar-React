import React from "react";
import { sp } from "../../utils/numbers";
import styles from "./Main.module.css";
const Main = ({ data, isLoading }) => {
  if (isLoading) return <p>درحال بارگزاری</p>;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return (
    <div className={styles.container}>
      {data?.data?.posts.map((post) => (
        <div className={styles.card} key={post._id}>
          <div className={styles.info}>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src={`${baseUrl}${post.images[0]}`} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Main;
