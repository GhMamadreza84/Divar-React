import React, { useEffect, useState } from "react";
import { deleteCategory, getCategory } from "../../services/category";
import styles from "./CategoryList.module.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CategoryList = () => {
  // const [categories, setCategories] = useState([]);
  const queryClient = useQueryClient();
  if (typeof getCategory !== "function")
    console.log("getcategory is not a function");
  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery(["categories"], getCategory);

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: (data, id) => {
      const previousCategories = queryClient.getQueryData(["categories"]);

      if (Array.isArray(previousCategories)) {
        const updatedCategories = previousCategories.filter(
          (category) => category._id !== id
        );

        queryClient.setQueryData(["categories"], updatedCategories);
      } else {
        console.error("Previous categories data is not an array.");
      }
      toast.success("کتگوری با موفقییت حذف شد ");
    },
    onError: (error) => {
      console.log("Failed to delete the category:", error.message);
    },
  });

  const deleteHandler = (id) => mutation.mutate(id);

  if (isLoading) return <p>loading</p>;
  if (error) return <p>error : {error.message}</p>;

  return (
    <>
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
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default CategoryList;
