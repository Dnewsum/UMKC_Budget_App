// src/components/NavbarHome.tsx
import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function NavbarHome() {
  const location = useLocation();
  const navigate = useNavigate();

  // toggle when on exactly /dashboard
  const inDashboard = location.pathname === "/dashboard";

  const handleSignOut = () => {
    // ← clear your auth state here (e.g. localStorage.removeItem)
    navigate("/"); // send them back home
  };

  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-2"
    >
      {/* Logo */}
      <NavbarBrand as={Link} to="/">
        <img
          src="/MintConditionLogo.png"
          className="mr-4 ml-2.5 h-18.5"
          alt="Mint Condition Logo"
        />
      </NavbarBrand>

      {/* Right Side */}
      <div className="flex w-full items-center justify-end gap-3 md:order-2 md:w-auto">
        <NavbarToggle />

        <NavbarCollapse className="hidden md:flex md:flex-row md:items-center md:gap-6">
          <NavbarLink as={Link} to="/" className="text-base font-medium hover:text-blue-900">
            Home
          </NavbarLink>

          <Dropdown
            arrowIcon
            inline
            label={<span className="text-base font-medium hover:text-blue-900">Services</span>}
          >
            <DropdownItem as={Link} to="/servicesAI">AI Teacher</DropdownItem>
            <DropdownItem as={Link} to="/ServiceBudget">Budget Visualization</DropdownItem>
            <DropdownItem as={Link} to="/servicesExpense">Detailed Tables and More...</DropdownItem>
            <DropdownDivider />
          </Dropdown>

          <NavbarLink as={Link} to="/about" className="text-base font-medium hover:text-blue-900">
            About
          </NavbarLink>
        </NavbarCollapse>

        {/* ← conditional button */}
        {inDashboard ? (
          <Button
            onClick={handleSignOut}
            className="ml-6 bg-blue-800 px-4 text-sm text-white hover:bg-black md:text-base"
            size="sm"
          >
            Sign Out
          </Button>
        ) : (
          <Button
            as={Link}
            to="/login"
            className="ml-6 bg-blue-800 px-4 text-sm text-white hover:bg-blue-900 md:text-base"
            size="sm"
          >
            Login
          </Button>
        )}
      </div>
    </Navbar>
  );
}
