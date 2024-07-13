const SideBar = () => {
  const { data } = useQuery(["get-categories"], getCategory);

  return (
    <div>
      <h4>دسته ها </h4>
      {data?.data.map((category) => (
        <li key={category._id}>
          <img src={`${category.icon}.svg`} alt="side-bar-icon" />
          <p>{category.name}</p>
        </li>
      ))}
    </div>
  );
};

export default SideBar;
