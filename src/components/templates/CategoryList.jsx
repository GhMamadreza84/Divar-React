import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";

const CategoryList = () => {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  console.log({ data, isLoading });
  return <div>category</div>;
};

export default CategoryList;
