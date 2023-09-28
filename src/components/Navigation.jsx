import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Navigation() {
  const dropdownItems = [
    { title: "Atendimento presencial", id: "atendimento" },
    { title: "LGPD", id: "lgpd" },
    { title: "Legislação", id: "legislacao" },
  ];

  return (
    <Navbar bg="light" expand="lg" className='my-3'>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Balcão virtual</Nav.Link>
            <Nav.Link href="#features">Fale conosco</Nav.Link>
          </Nav>
          {/* Dropdowns dinâmicos */}
          <div className='d-flex gap-2'>
            {dropdownItems.map((item) => (
              <NavDropdown key={item.id} title={item.title} id={`${item.id}-dropdown`}>
                <NavDropdown.Item href="#action3">Item 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Item 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Item 3</NavDropdown.Item>
              </NavDropdown>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
