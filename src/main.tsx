// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import DashboardHome from "./pages/DashboardHome.tsx";
import AITeacher from "./pages/AITeacher.tsx";
import SpendingBreakdown from "./pages/SpendingBreakdown.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import "./index.css";

import { NavbarHome } from "./components/NavbarHome.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavbarHome />
    <Home />
  </StrictMode>,
);
