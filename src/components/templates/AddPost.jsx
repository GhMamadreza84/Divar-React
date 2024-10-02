import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "../../services/category";

const AddPost = () => {
  const { data } = useQuery(["categories"], getCategory);
  // console.log(data.name);
  return (
    <form>
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
        {data?.map((i) => {
          <option key={i._id} value={i._id}>
            {i.name}
          </option>;
        })}
      </select>
    </form>
  );
};

export default AddPost;
