import React, { useState } from "react";
import { addCateGory, getCategory } from "../services/category";

const AdminPage = () => {
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

export default AdminPage;
