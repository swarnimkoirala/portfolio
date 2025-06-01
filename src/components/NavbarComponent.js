import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComponent = ({ onNavClick }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavClick('hero'); // Scrolls to top
          }}
        >
          Swarnim's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              'career-objective',
              'technical-skills',
              'education',
              'professional-development',
              'work-experience',
              'references',
            ].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(section);
                }}
              >
                {section.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
