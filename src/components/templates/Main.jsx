import React from "react";

const Main = ({ data, isLoading }) => {
  if (isLoading) return <p>درحال بارگزاری</p>;
  console.log(data);
  return (
    <div>
      {data?.data?.posts.map((post) => (
        <div>
          <img src={post.images[0]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Main;
