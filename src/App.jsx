import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AdminPage from "./pages/AdminPage";
import PageNotFount from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
