import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
  console.log({ data, isLoading });
  if (isLoading) return <h1>Loading...</h1>;
  const role = data?.data?.role;
  console.log(role);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/admin"
        element={data && role === "ADMIN" ? <AdminPage /> : <Navigate to="/" />}
      />
      <Route path="*" element={<PageNotFount />} />
    </Routes>
  );
};

export default Router;
