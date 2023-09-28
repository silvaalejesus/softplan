import { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMediaQuery } from 'react-responsive';

const FormComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Defina o limite para dispositivos móveis

  const initialState = {
    nome: '',
    email: '',
    cidade: '',
    duvida: '',
    termosAceitos: false,
  };
  const [formData, dispatch] = useReducer(formReducer, initialState);

  function formReducer(state, action) {
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'RESET_FORM':
        return initialState;
      default:
        return state;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData)

    dispatch({ type: 'RESET_FORM' });
  };

  const isFormValid = formData.termosAceitos;

  return (
    <>
      <h1 className='text-center mt-3'>Envie sua dúvida</h1>
      <Form className='my-4' onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center">
          <Form.Group className={`mb-3 ${isMobile ? '' : 'w-25'}`} controlId="formBasicPassword">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'nome', value: e.target.value })}
            />
          </Form.Group>
          <Form.Group className={`mb-3 ${isMobile ? '' : 'w-25'}`} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className={`mb-3 ${isMobile ? '' : 'w-25'}`} controlId="formBasicCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'cidade', value: e.target.value })}
            />
          </Form.Group>
          <Form.Group className={`mb-3 ${isMobile ? '' : 'w-25'}`} controlId="formBasicDuvida">
            <Form.Label>Dúvida</Form.Label>
            <Form.Control
              rows={3}
              type='text'
              as="textarea"
              placeholder="Dúvida"
              required
              value={formData.duvida}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'duvida', value: e.target.value })}
            />
          </Form.Group>
          <Form.Group className={`mb-3 ${isMobile ? '' : 'w-25'}`} controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Concordo com os termos e condições"
              checked={formData.termosAceitos}
              onChange={() => dispatch({ type: 'SET_FIELD', field: 'termosAceitos', value: !formData.termosAceitos })}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='w-25' disabled={!isFormValid}>
            Enviar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormComponent;
