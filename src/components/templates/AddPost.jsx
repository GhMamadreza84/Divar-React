import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";
import styles from "./AddPost.module.css";
import { getCookie } from "src/utils/cookie";
const AddPost = () => {
  const { data } = useQuery(["get-categories"], getCategory);
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    category: "",
    images: null,
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files });
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
          AuthorizationL: `bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن اگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />

      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />

      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount" />

      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />

      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>

      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />

      <button onClick={addHandler}>ثبت اگهی</button>
    </form>
  );
};

export default AddPost;
