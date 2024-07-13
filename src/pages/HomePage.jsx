import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import { getAllPosts } from "services/user";

const style = { display: "flex" };

const HomePage = () => {
  const { data } = useQuery(["post-list"], getAllPosts);
  console.log({data})
  return (
    <div style={style}>
      <SideBar />
      <Main data={data}  />
    </div>
  );
};

export default HomePage;
