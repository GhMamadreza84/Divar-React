import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";
import Loader from "../modules/Loader";

const PostList = () => {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  console.log({ data, isLoading });
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <br />
          <h3>آگهی های شما</h3>
          {data.data.posts.map((post) => (
            <div key={post._id}>
              <img src={`${baseUrl}${post.images[0]}`} />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div>
                <p>{post.createdAt}</p>
                <span>{post.amount} تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PostList;
