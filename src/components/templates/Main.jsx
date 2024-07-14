import { sp } from "src/utils/numbers";

const Main = ({ posts }) => {
  return (
    <div>
      {posts.data.posts.map((post) => (
        <div key={post._id}>
          <div>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src="" />
        </div>
      ))}
    </div>
  );
};

export default Main;
