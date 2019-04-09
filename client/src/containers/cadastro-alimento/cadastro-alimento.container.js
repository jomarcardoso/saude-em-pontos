import React, { useState } from 'react';
import { Container } from 'reactstrap';
import FormAlimento from './form-alimento.section';
import TableAlimento from './table-alimento.section';
import { api } from '../../config/contants';

export default function CadastroAlimento() {
  const [nome, setNome] = useState('');
  const [calorias, setCalorias] = useState(0);
  const [indiceGlicemico, setIndiceGlicemico] = useState(0);
  const [acidificacao, setAcidificacao] = useState(0);
  const [inflamatorio, setInflamatorio] = useState(0);
  const [descricao, setDescricao] = useState(0);
  const [table, setTable] = useState([]);
  const [ mounted, setMounted ] = useState(false)

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

  function getTable() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch(`${api}/alimento`, {
      method: 'GET',
      headers
    })
      .then((response) => {
        response.json()
          .then(body => {
            if(body) setTable(body)
          })
          .catch(response => {
            console.error(response);
          });
      })
  }

  if (!mounted) {
    setMounted(true);
    getTable();
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
