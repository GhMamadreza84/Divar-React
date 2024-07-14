const Main = ({ posts }) => {
  return <div>
    {posts.data.posts.map(post=>{
      <div key={post._id}>
        
      </div>
    })}
  </div>;
};

export default Main;
