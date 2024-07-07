import { useState } from "react";
import styles from "./CategoryForm.module.css";
import { useMutation } from "@tanstack/react-query";
const CategoryForm = () => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { mutate, isLoading, error } = useMutation();
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    if (!form.name || !form.slug || !form.icon) return;

    mutate(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
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
