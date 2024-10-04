import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getCategory } from "../../services/category";
import { addPost } from "../../services/post";

const AddPost = () => {
  // for invalidating cache
  const queryClient = useQueryClient();
  // get categories
  const { data } = useQuery(["categories"], getCategory);
  // mutation operation
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries["categories"];
      console.log("post successfully added ");
    },
    onError: (error) => {
      console.log("Error in adding post :", error);
    },
  });
  // handle enteries data
  const [formatData, setFormatData] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    category: "",
    images: null,
  });

  // handle file change
  const handleFileChange = (e) => {
    setFormatData({
      ...formatData, // تغییر از FormData به formatData
      images: e.target.files[0],
    });
  };

  const addHandler = (e) => {
    e.preventDefault();
    // for send files we needed use FormData()
    const formDataToSend = new FormData();
    formDataToSend.append("title", formatData.title);
    formDataToSend.append("content", formatData.content);
    formDataToSend.append("amount", formatData.amount);
    formDataToSend.append("city", formatData.city);
    formDataToSend.append("category", formatData.category);
    formDataToSend.append("images", formatData.images);
    // send data
    mutation.mutate(formDataToSend);
  };
  return (
    <form onSubmit={addHandler}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) =>
          setFormatData({ ...formatData, title: e.target.value })
        }
      />
      <label htmlFor="content">توضیحات</label>
      <input
        type="text"
        name="content"
        id="content"
        onChange={(e) =>
          setFormatData({ ...formatData, content: e.target.value })
        }
      />
      <label htmlFor="amount">قیمت</label>
      <input
        type="text"
        name="amount"
        id="amount"
        onChange={(e) =>
          setFormatData({ ...formatData, amount: e.target.value })
        }
      />
      <label htmlFor="city">شهر</label>
      <input
        type="text"
        name="city"
        id="city"
        onChange={(e) => setFormatData({ ...formatData, city: e.target.value })}
      />
      <label htmlFor="category">دسته بندی</label>
      <select
        name="category"
        id="category"
        onChange={(e) =>
          setFormatData({ ...formatData, category: e.target.value })
        }
      >
        {data?.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input
        type="file"
        name="images"
        id="images"
        onChange={handleFileChange}
      />
      <button type="submit">ثبت آگهی</button>
    </form>
  );
};

export default AddPost;
