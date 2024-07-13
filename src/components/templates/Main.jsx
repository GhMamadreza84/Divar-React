const Main = ({ data }) => {
  return <div>
    {data?.data.posts.map(post=>(
      <div>
        <img src={post.images} alt="" />
        <p>{post.name}</p>
      </div>
    ))}
  </div>;
};

export default Main;
