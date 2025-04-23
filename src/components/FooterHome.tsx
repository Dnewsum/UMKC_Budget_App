// src/components/FooterHome.tsx
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from "react-router-dom";

export function FooterHome() {
  return (
    <Footer container className="bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-6 mt-20">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <FooterCopyright
          href="/"
          by="Mint Condition"
          year={new Date().getFullYear()}
        />
        <FooterLinkGroup className="mt-4 md:mt-0 space-x-4">
          <FooterLink as={Link} to="/">
            Home
          </FooterLink>
          <FooterLink as={Link} to="/about">
            About
          </FooterLink>
          <FooterLink as={Link} to="/privacy-policy">
            Privacy Policy
          </FooterLink>
          <FooterLink as={Link} to="/licensing">
            Licensing
          </FooterLink>
          <FooterLink as={Link} to="/contact">
            Contact
          </FooterLink>
        </FooterLinkGroup>
      </div>
    </Footer>
  );
}
