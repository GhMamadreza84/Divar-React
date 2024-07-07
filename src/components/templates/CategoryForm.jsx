import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "src/services/admin";
import styles from "./CategoryForm.module.css";
const CategoryForm = () => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { mutate, isLoading, error, data } = useMutation(addCategory);
  console.log({ isLoading, error, data });
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
      {!!error && <p>مشکلی پیش آمده است</p>}
      {data && <p>دسته بندی با موفقیت اضافه شد</p>}
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />

      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />

      <button type="submit" disabled={isLoading}>
        ثبت
      </button>
    </form>
  );
};

export default CategoryForm;
