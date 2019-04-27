import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { api } from '../../config/contants';
import FormAlimento from './FormAlimento';
import TableAlimento from './TableAlimento';
import axios from 'axios';

export default function Alimento() {
  const [ table, setTable ] = useState([]);
  const [ form, setForm ] = useState({});

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
    return {};
  }

  function handleEdit(data) {
    setForm(data);
  }

  useEffect(() => {
    axios.get(`${api}/alimento`)
    .then(res => {
      setTable(res.data)
    })
  }, []);

  return (
    <>
      <h3>Cadastro de Alimento</h3>
      <FormAlimento
        send={send}
        initialData={form}
      />
      <TableAlimento
        onEdit={handleEdit}
        list={table}
      />
    </>
  )
}
