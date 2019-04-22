import React from 'react';
import { Container } from 'reactstrap';
import { api } from '../../config/contants';
import FormAlimento from './FormAlimento';

export default function Alimento() {
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
        <FormAlimento send={send}/>
        {/* <TableAlimento
          table={table}
        /> */}
      </Container>
    </main>
  )
}
