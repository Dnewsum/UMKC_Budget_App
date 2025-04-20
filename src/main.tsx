// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import DashboardHome from "./pages/DashboardHome.tsx";
import AITeacher from "./pages/AITeacher.tsx";
import SpendingBreakdown from "./pages/SpendingBreakdown.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ExpenseTable from "./pages/ExpenseTablePage.tsx";
import "./index.css";

import { NavbarHome } from "./components/NavbarHome.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import ServiceAI from "./pages/ServiceAI.tsx";
import ServicesExpense from "./pages/SerivcesExpense.tsx";
import ExpenseTablePage from "./pages/ExpenseTablePage.tsx";
import FlowbiteChartsPage from "./pages/ServiceBudget.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/spending-breakdown" element={<SpendingBreakdown />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/ai-teacher" element={<AITeacher />} />
        <Route path="/expensetable" element={<ExpenseTablePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicesAI" element={<ServiceAI />} />
        <Route path="/servicesExpense" element={<ServicesExpense />} />
        <Route path="/ServiceBudget" element={<FlowbiteChartsPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  </StrictMode>,
);
