import React, { useState } from "react";
import { addCateGory } from "../../services/category";

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
    <div>
      <form onSubmit={handleSubmit}>
        <h3>دسته بندی جدید</h3>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="icon"
          onChange={(e) => setIcon(e.target.value)}
        />
        <input
          type="text"
          placeholder="slug"
          onChange={(e) => setSlug(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CategoryForm;
