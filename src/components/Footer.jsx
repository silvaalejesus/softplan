import SecretariaSelect from "./Select"
import logo from "../assets/logo-governo-da-bahia (1).png"
const Footer = () =>
  <footer className="page-footer font-small pt-4 m-5 ">
    <div className=" d-flex">
      <img src={logo} alt="logo" style={{ width: "10%", height: "10%" }} />
      <div className="border-start border-2 px-3 ms-5"></div>
      <div className="col-md-6 mt-md-0 mt-3 text-center">
        <span className="text-uppercase">SEFAZ | BA – Secretaria da Fazenda do Estado da Bahia</span>
        <div className=" d-flex flex-column my-2">
          <span>2ª Avenida, nº 260 – Centro Administrativo da Bahia</span>
          <span>CEP: 41.745-003, CAB – Salvador – Bahia.</span>
          <span>CNPJ: 13.937.073/0001-56</span>
        </div>

        <div className=" d-flex flex-column mb-2">
          <span>Horário de funcionamento:</span>
          <span>De segunda a sexta-feira – 08h30 às 12h | 13h30 às 18h.</span>
        </div>
        <div>
          <a className="me-3" style={{ textDecoration: 'none', cursor: 'pointer' }} ><i className="bi bi-envelope"></i> Fale Conosco</a>
          <a style={{ textDecoration: 'none', cursor: 'pointer' }}><i className="bi bi-telephone"></i> 0800 071 0071</a>
        </div>
      </div>
      <div className=" d-flex justify-content-center align-items-end flex-column">
        <SecretariaSelect />
      </div>
      {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}
    </div>
  </footer>

export default Footer