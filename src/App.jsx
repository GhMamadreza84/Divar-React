import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage";
import AdminPage from "pages/AdminPage";
import PageNotFound from "pages/404";
import Router from "./router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
