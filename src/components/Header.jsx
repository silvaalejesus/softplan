import logoGoverno from "../assets/logo-governo-da-bahia.png";
import { Button, Form, InputGroup } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-around align-items-center mt-4">
        <a href="#" className="d-inline-block">
          <img className='h-auto' style={{ width: '200px' }} src={logoGoverno} alt="Logo" />
        </a>
        <div className="d-flex align-items-center">
          <div className="me-5">
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
          </div>
          <div className="social-media d-flex gap-3 ms-auto">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
