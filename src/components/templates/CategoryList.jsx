import React, { useEffect, useState } from "react";
import { deleteCategory, getCategory } from "../../services/category";
import styles from "./CategoryList.module.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const CategoryList = () => {
  // const [categories, setCategories] = useState([]);
  const queryClient = useQueryClient();

  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery("queries", getCategory);

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: (data, id) => {
      queryClient.setQueryData("categories", (oldCategories) =>
        oldCategories.filter((category) => category._id !== id)
      );
    },
    onError: (error) =>
      console.log("Failed to delte the Category:", error.message),
  });

  const deleteHandler = (id) => mutation.mutate(id);

  if (isLoading) return <p>loading</p>;
  if (error) return <p>error : {error.message}</p>;

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
