import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "../../services/category";

const Sidebar = () => {
  const { data, isLoading } = useQuery(["category"], getCategory);
  console.log({ data, isLoading });
  return (
    <div>
      <h3>دسته بندی ها</h3>
      {isLoading ? (
        <p>در حال بارگذاری</p>
      ) : (
        data?.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} alt="" />
            <span>{category.name}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Sidebar;
