import React, { useState } from 'react';
import { Input, Form, Col } from 'reactstrap';
import { SaInput, SaSubmit } from '../../components';

export default function FormAlimento({ onSend }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [calorias, setCalorias] = useState(0);
  const [indiceGlicemico, setIndiceGlicemico] = useState(0);
  const [ph, setPh] = useState(0);

  // const initialState = { nome, quantidade, calorias, indiceGlicemico, ph };

  async function submit(e) {
    e.preventDefault();
    if (!onSend) return;

    const result = await onSend({
      nome,
      quantidade,
      calorias,
      indiceGlicemico,
      ph
    })

    if (result.success) {
      return;
    }
  }

  return (
    <Form onSubmit={submit}>
      <SaInput label="Nome">
        <Input
          id="nome"
          onChange={e => setNome(e.target.value)}
          value={nome}
          name="nome"
        />
      </SaInput>
      <SaInput label="Quantidade">
        <Input
          id="quantidade"
          onChange={e => setQuantidade(e.target.value)}
          value={quantidade}
          name="quantidade"
          type="number"
        />
      </SaInput>
      <SaInput label="Calorias">
        <Input
          id="calorias"
          onChange={e => setCalorias(e.target.value)}
          value={calorias}
          name="calorias"
          type="number"
        />
      </SaInput>
      <SaInput label="Indice Glicêmico">
        <Input
          id="indiceGlicemico"
          onChange={e => setIndiceGlicemico(e.target.value)}
          value={indiceGlicemico}
          name="indiceGlicemico"
          type="number"
        />
      </SaInput>
      <SaInput label="PH">
        <Input
          id="ph"
          onChange={e => setPh(e.target.value)}
          value={ph}
          name="ph"
          type="number"
        />
      </SaInput>
      <SaSubmit />
    </Form>
  );
}
