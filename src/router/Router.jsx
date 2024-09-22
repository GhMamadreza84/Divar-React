import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import PageNotFount from "../pages/404";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import { useQuery } from "@tanstack/react-query";

const Router = () => {
  const { data, isLoading } = useQuery(["profile"]);
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
