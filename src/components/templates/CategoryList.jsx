import React, { useEffect, useState } from "react";
import { getCategory } from "../../services/category";
import styles from "./CategoryList.module.css";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategories(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className={styles.list}>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} alt="" />
            <h5>{category.name}</h5>
            <p>slug: {category.slug}</p>
          </div>
        ))
      ) : (
        <p>دسته بندی ای وجود ندارد</p>
      )}
    </div>
  );
};

export default CategoryList;
