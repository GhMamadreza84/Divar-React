import React from "react";
import { sp } from "../../utils/numbers";

const Main = ({ data, isLoading }) => {
  if (isLoading) return <p>درحال بارگزاری</p>;
  console.log(data);
  return (
    <div>
      {data?.data?.posts.map((post) => (
        <div key={post._id}>
          <div>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src="" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Main;
