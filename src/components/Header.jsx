import logoGoverno from "../assets/logo-governo-da-bahia.png";
import { Navbar, Nav, Button, Form, InputGroup, Container, NavDropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const dropdownItems = [
    { title: "Atendimento presencial", id: "atendimento" },
    { title: "LGPD", id: "lgpd" },
    { title: "Legislação", id: "legislacao" },
  ];

  return (
    <header>
      <Navbar expand="md mx-2">
        <Navbar.Brand href="#">
          {isMobile ? (
            <img className='h-auto' style={{ width: '100px' }} src={logoGoverno} alt="Logo" />
          ) : (
            <img className='h-auto' style={{ width: '200px' }} src={logoGoverno} alt="Logo" />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Container className={` ${isMobile ? 'd-block' : 'd-flex'}`}>
              <Nav.Link href="#home">Balcão virtual</Nav.Link>
              <Nav.Link href="#features">Fale conosco</Nav.Link>
            </Container>
            {/* Dropdowns dinâmicos */}
            <div className={`d-flex gap-2 ${isMobile ? 'ms-2 p-0 d-flex flex-column' : ''}`}>
              {dropdownItems.map((item) => (
                <NavDropdown key={item.id} title={item.title} id={`${item.id}-dropdown`}>
                  <NavDropdown.Item href="#action3">Item 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Item 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Item 3</NavDropdown.Item>
                </NavDropdown>
              ))}
            </div>
          </Nav>
          <Form className={`d-md-flex ${isMobile ? 'my-2 me-0' : 'me-3'}`}>
            <InputGroup>
              <Form.Control
                placeholder="Buscar por ..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
          <div className="social-media d-flex gap-3">
            <a href="https://www.facebook.com/seu-facebook" target="_blank" rel="noopener noreferrer" className="link-opacity-10-hover">
              <i className="text-secondary fs-3 bi bi-instagram"></i>
            </a>
            <a href="https://www.twitter.com/seu-twitter" target="_blank" rel="noopener noreferrer">
              <i className="text-secondary fs-3 bi bi-youtube"></i>
            </a>
            <a href="https://www.twitter.com/seu-twitter" target="_blank" rel="noopener noreferrer">
              <i className="text-secondary fs-3 bi bi-facebook"></i>
            </a>
            <a href="https://www.twitter.com/seu-twitter" target="_blank" rel="noopener noreferrer">
              <i className="text-secondary fs-3 bi bi-twitter"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
