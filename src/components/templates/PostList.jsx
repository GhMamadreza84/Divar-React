import { useQueries, useQuery } from "@tanstack/react-query";

const PostList = () => {
  const { data, isLoading } = useQuery(["my-post-list"]);
  return <div>Post List</div>;
};

export default PostList;
