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
    const method = Object.entries(form).length > 0 ? 'PUT' : 'POST';
    const { id } = data;
    headers.append('Content-Type', 'application/json');

    fetch(`${api}/alimento${id ? `/${id}` : ''}`, {
      method,
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
    setForm({...data});
  }

  function handleDelete(id) {
    axios.delete(`${api}/alimento/${id}`)
    .then(res => {
      console.log(res.data)
    })
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
        onDelete={handleDelete}
        list={table}
      />
    </>
  )
}
