import React from "react";
import style from "./Loader.module.css";
import { ClipLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className={style.container}>
      <ClipLoader color="#D83939" size={30} />
    </div>
  );
};

export default Loader;
