import React, { useEffect, useState } from "react";
import { addCateGory, getCategory } from "../../services/category";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./CategoryForm.module.css";
import CategoryList from "./CategoryList";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CategoryForm = () => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("");
  // const [parent, setParent] = useState("");

  const mutation = useMutation({
    mutationFn: addCateGory,
    onSuccess: (newCategory) => {
      queryClient.setQueriesData(["categories"], (oldData) => {
        if (Array.isArray(oldData)) {
          return [...oldData, newCategory];
        } else {
          return [newCategory];
        }
      });
      queryClient.invalidateQueries(["categories"]);
      toast.success("دسته بندی با موفقیت اضافه شد !");
    },
    onError: (error) => {
      toast.error("خطایی رخ داد دوباره تلاش کنید !");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryData = {
      name,
      slug,
      icon,
    };
    mutation.mutate(categoryData);
    setName("");
    setSlug("");
    setIcon("");
  };

 

  return (
    <div>
      <CategoryList />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>دسته بندی جدید</h3>

        {/* name */}
        <label htmlFor="name">اسم دسته بندی</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* slug */}
        <label htmlFor="slug">آیکن </label>
        <input
          id="slug"
          type="text"
          name="slug"
          placeholder="icon"
          onChange={(e) => setIcon(e.target.value)}
        />
        {/* icon */}
        <label htmlFor="icon">اسلاگ</label>
        <input
          id="icon"
          type="text"
          name="icon"
          placeholder="slug"
          onChange={(e) => setSlug(e.target.value)}
        />
        <button type="submit">ایجاد</button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default CategoryForm;
