import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import FormAlimento from './form-alimento.section';
import TableAlimento from './table-alimento.section';
import { api } from '../../config/contants';
import HOCCadastro from '../hoc-cadastro';

function CadastroAlimento({ table }) {
  const [nome, setNome] = useState('');
  const [calorias, setCalorias] = useState(0);
  const [indiceGlicemico, setIndiceGlicemico] = useState(0);
  const [acidificacao, setAcidificacao] = useState(0);
  const [inflamatorio, setInflamatorio] = useState(0);
  const [descricao, setDescricao] = useState(0);

  function send(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch(`${api}/alimento`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
      .then((response) => {
        response.json()
          .then(body => {
            if(body) console.log(body)
          })
          .catch(response => {
            console.error(response);
          });
      })

    console.log(data)
    return {};
  }

  return (
    <main>
      <Container>
        <h3>Cadastro de Alimento</h3>
        <FormAlimento
          onSend={send}
          nome={nome}
          setNome={setNome}
          calorias={calorias}
          setCalorias={setCalorias}
          setIndiceGlicemico={setIndiceGlicemico}
          indiceGlicemico={indiceGlicemico}
          acidificacao={acidificacao}
          setAcidificacao={setAcidificacao}
          inflamatorio={inflamatorio}
          setInflamatorio={setInflamatorio}
          descricao={descricao}
          setDescricao={setDescricao}
        />
        <TableAlimento
          table={table}
        />
      </Container>
    </main>
  )
}

export default HOCCadastro(CadastroAlimento)
