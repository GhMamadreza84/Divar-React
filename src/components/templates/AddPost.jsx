import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getCategory } from "../../services/category";
import { addPost } from "../../services/post";
import styles from "./AddPost.module.css";
import { getCookie } from "../../utils/cookie";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const AddPost = () => {
  const { data } = useQuery(["category"], getCategory);
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    amount: null,
    images: null,
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };
  const addHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then(() => toast.success("آگهی با موفقیت منتشر شد"))
      .catch(() => toast.error("بنظر مشکلی وجود داره عزیزم"));
  };
  return (
    <>
      <form onChange={changeHandler} className={styles.form}>
        <h3>افزودن آگهی</h3>
        <label htmlFor="title">عنوان</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">توضیحات</label>
        <textarea name="content" id="content"></textarea>
        <label htmlFor="amount">قیمت</label>
        <input type="text" name="amount" id="amount" />
        <label htmlFor="city">شهر</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="category">دسته بندی</label>
        <select name="category" id="category">
          <option>دسته بندی مورد نظر را انتخاب کنید</option>
          {data?.map((i) => (
            <option key={i._id} value={i._id}>
              {i.name}
            </option>
          ))}
        </select>
        <label htmlFor="images">عکس</label>
        <input type="file" name="images" id="images" />
        <button onClick={addHandler}>ثبت آگهی</button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default AddPost;
