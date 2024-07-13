import Main from "src/components/templates/Main";
import SideBar from "src/components/templates/SideBar";
import { getAllPosts } from "src/services/user";

const style = { display: "flex" };

const HomePage = () => {
  const { data , isLoading} = useQuery(["post-list"], getAllPosts);

  return (
    <div style={style}>
      <SideBar />
      <Main />
    </div>
  );
};

export default HomePage;
