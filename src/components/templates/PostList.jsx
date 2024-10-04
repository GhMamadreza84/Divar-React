import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../../services/user";
import Loader from "../modules/Loader";

const PostList = () => {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  console.log({ data, isLoading });
  return <div>{isLoading ? <Loader /> : <h3></h3>}</div>;
};

export default PostList;
