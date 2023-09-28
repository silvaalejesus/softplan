import { Form } from 'react-bootstrap';
import secretarias from "../secretarias.json";

const SecretariaSelect = () => {
  return (
    <Form.Select className='my-3'>
      <option value="">Selecione uma secretaria</option>
      {secretarias.map((secretaria, index) => (
        <option key={index} value={secretaria.sigla}>
          {secretaria.sigla} - {secretaria.nome}
        </option>
      ))}
    </Form.Select>
  );
}

export default SecretariaSelect;
