const SideBar = () => {
  const { data } = useQuery(["get-categories"], getCategory);

  return <div>
    <h4>دسته ها </h4>
    
  </div>;
};

export default SideBar;
