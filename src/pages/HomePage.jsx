import { useQuery } from "@tanstack/react-query";
import Main from "src/components/templates/Main";
import SideBar from "src/components/templates/SideBar";
import { getAllPosts } from "src/services/user";

const style = { display: "flex" };

const HomePage = () => {
  const { data , isLoading} = useQuery(["post-list"], getAllPosts);
  console.log({data,isLoading})
  return (
    <div style={style}>
      <SideBar />
      <Main />
    </div>
  );
};

export default HomePage;
