import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";

const AddPost = () => {
  const { data } = useQuery(["get-categories"], getCategory);

  return (
    <form>
      <h3>افزودن اگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />

      <label htmlFor="amount">قیمت</label>
      <input type="text" name="amount" id="amount" />

      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />


    </form>
  );
};

export default AddPost;
