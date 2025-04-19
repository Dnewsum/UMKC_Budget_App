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

export function NavbarHome() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-2"
    >
      {/* Logo */}
      <NavbarBrand href="/">
        <img
          src="/MintConditionLogo.png"
          className="mr-4 ml-2.5 h-18.5"
          alt="Mint Condition Logo"
        />
      </NavbarBrand>

      {/* Right Side: All Links & Login */}
      <div className="flex w-full items-center justify-end gap-3 md:order-2 md:w-auto">
        <NavbarToggle />

        {/* Collapse only visible on mobile */}
        <NavbarCollapse className="hidden md:flex md:flex-row md:items-center md:gap-6">
          <NavbarLink
            href="#"
            className="text-base font-medium hover:text-blue-900"
          >
            Home
          </NavbarLink>

          <Dropdown
            arrowIcon
            inline
            label={
              <span className="text-base font-medium hover:text-blue-900">
                Services
              </span>
            }
          >
            <DropdownItem>AI Teacher</DropdownItem>
            <DropdownItem>Budget Visualization</DropdownItem>
            <DropdownItem>Alerts, Search, and More...</DropdownItem>
            <DropdownDivider />
          </Dropdown>

          <NavbarLink
            href="#"
            className="text-base font-medium hover:text-blue-900"
          >
            About
          </NavbarLink>
        </NavbarCollapse>

        <Button
          className="ml-6 bg-blue-800 px-4 text-sm text-white hover:bg-blue-900 md:text-base"
          size="sm"
        >
          Login
        </Button>
      </div>
    </Navbar>
  );
}
