import { useState } from "react";

const CategoryForm = () => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <form onChange={changeHandler}>
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="slug">اسلاگ</label>
      <input type="text" slug="slug" id="slug" />

      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />

      <button type="submit">ثبت</button>
    </form>
  );
};

export default CategoryForm;
