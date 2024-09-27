import React, { useEffect, useState } from "react";
import { addCateGory, getCategory } from "../../services/category";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./CategoryForm.module.css";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("");
  const [categories, setCategories] = useState([]);
  // const [parent, setParent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = {
      name,
      slug,
      icon,
      // parent,
    };
    try {
      const result = await addCateGory(categoryData);
      toast.success("دسته‌بندی با موفقیت اضافه شد!");
    } catch (error) {
      toast.error("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    }
  };

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
    <div>
      <div>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={index}>{category.name}</div>
          ))
        ) : (
          <p>دسته بندی ای وجود ندارد</p>
        )}
      </div>
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
