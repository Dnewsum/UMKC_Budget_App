// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.tsx";
import "./index.css";

import { NavbarHome } from "./components/NavbarHome.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavbarHome />
      <Home />
  </StrictMode>
);
