import { useQueries, useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";

const PostList = () => {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  return <div>Post List</div>;
};

export default PostList;
