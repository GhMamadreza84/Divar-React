import React, { useEffect, useState } from "react";
import { deleteCategory, getCategory } from "../../services/category";
import styles from "./CategoryList.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const queryClient = useQueryClient();

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

  const mutation = useMutation({
    mutationFn: deleteCategory,
    
  });

  // const deleteHandler = async (id) => {
  //   try {
  //     await deleteCategory(id);
  //     console.log("category deleted successfully");
  //   } catch (error) {
  //     console.log("failed to delete the category", error.message);
  //   }
  // };
  return (
    <div className={styles.list}>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} alt="" />
            <h5>{category.name}</h5>
            <button onClick={() => deleteHandler(category._id)}>حذف</button>
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
