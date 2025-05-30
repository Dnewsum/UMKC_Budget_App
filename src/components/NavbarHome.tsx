import {
  Button,
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

  // Detect dashboard route
  const inDashboard = location.pathname.startsWith("/dashboard");

  const handleSignOut = () => {
    // Clear auth state (customize as needed)
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-2"
    >
      {/* Logo + Optional Label */}
      <NavbarBrand as={Link} to={inDashboard ? "/dashboard" : "/"}>
      <img
        src="/MintConditionLogo.png"
        className="mr-4 ml-2.5 h-auto max-h-20"
        alt="Mint Condition Logo"
      />
      </NavbarBrand>

      {/* Right side nav controls */}
      <div className="flex w-full items-center justify-end gap-3 md:order-2 md:w-auto">
      <NavbarToggle />

      <NavbarCollapse className="hidden md:flex md:flex-row md:items-center md:gap-6">
        {/* Home always shows */}
        <NavbarLink
        as={Link}
        to="/"
        className="text-base font-medium hover:text-blue-900"
        >
        Home
        </NavbarLink>

        {/* Show these links only when not on dashboard */}
        <>
        <NavbarLink
          as={Link}
          to="/servicesAI"
          className="text-base font-medium hover:text-blue-900"
        >
          AI Teacher
        </NavbarLink>

        <NavbarLink
          as={Link}
          to="/ServiceBudget"
          className="text-base font-medium hover:text-blue-900"
        >
          Visualization
        </NavbarLink>

        <NavbarLink
          as={Link}
          to="/servicesExpense"
          className="text-base font-medium hover:text-blue-900"
        >
          Breakdown
        </NavbarLink>
        {inDashboard ? (
          <NavbarLink
          as={Link}
          to="/"
          className="text-base font-medium hover:text-blue-900"
          ></NavbarLink>
        ) : (
          <NavbarLink
          as={Link}
          to="/about"
          className="text-base font-medium hover:text-blue-900"
          >
          About
          </NavbarLink>
        )}
        </>
      </NavbarCollapse>

      {/* Auth Button */}
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
