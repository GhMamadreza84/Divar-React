import React from "react";
import Sidebar from "../components/templates/Sidebar";
import Main from "../components/templates/Main";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/post";

const style = { display: "flex", justifyContent: "space-between" };

const HomePage = () => {
  const { data, isLoading } = useQuery(["post-list"], getPost);

  return (
    <div style={style}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default HomePage;
