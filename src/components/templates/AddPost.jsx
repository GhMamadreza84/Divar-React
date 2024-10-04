import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getCategory } from "../../services/category";
import { addPost } from "../../services/post";

const AddPost = () => {
  const { data } = useQuery(["category"], getCategory);
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    price: "",
    amount: null,
    images: null,
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      console.log(e.target);
    }
  };
  const addHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onChange={changeHandler}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <input type="text" name="content" id="content" />
      <label htmlFor="amount">قیمت</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
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
  );
};

export default AddPost;
