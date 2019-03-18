import React from 'react';
import { Container } from 'reactstrap';
import { FormAlimento } from '../../sections';
import { api } from '../../config/contants';

export default function CadastroAlimento() {
  function send(data) {
    // const headers = new Headers();
    const init = {
      method: 'POST'
    }

    fetch(`${api}/alimento`, { method: 'POST' })
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

  return(
    <main>
      <Container>
        <h3>Cadastro de Alimento</h3>
        <FormAlimento onSend={send} />
      </Container>
    </main>
  )
}
