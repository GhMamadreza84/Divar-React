import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import PageNotFount from "../pages/404";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import { getNewTokens } from "../configs/tokens";

const Router = () => {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  console.log({data,isLoading})
  // if (isLoading) return <h1>Loading...</h1>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFount />} />
    </Routes>
  );
};

export default Router;
