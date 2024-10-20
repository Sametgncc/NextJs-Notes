"use client";

import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-dark"
      data-bs-theme="dark"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/" as={Link}>
          Cosmo Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <Nav.Link key={item.id} as={Link} href={item.url} prefetch = {item.prefetch}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
