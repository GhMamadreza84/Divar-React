import React, { useState } from "react";
import { addCateGory } from "../../services/category";
import styles from "./CategoryForm.module.css";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("");
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
      console.log("Category added", result);
    } catch (error) {
      console.error("Error adding category:", error.message);
    }
  };

  return (
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
      <label htmlFor="slug">اسم دسته بندی</label>
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
      <button type="submit">submit</button>
    </form>
  );
};

export default CategoryForm;
