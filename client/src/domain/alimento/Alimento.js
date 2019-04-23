import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { api } from '../../config/contants';
import FormAlimento from './FormAlimento';
import TableAlimento from './TableAlimento';
import axios from 'axios';

export default function Alimento() {
  const [ table, setTable ] = useState([]);
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

  useEffect(() => {
    axios.get(`${api}/alimento`)
    .then(res => {
      console.log(res.data)
      setTable(res.data)
    })
  }, []);

  return (
    <>
      <h3>Cadastro de Alimento</h3>
      <FormAlimento send={send}/>
      <TableAlimento
        list={table}
      />
    </>
  )
}
