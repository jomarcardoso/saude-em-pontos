import React, { useEffect, useState } from 'react';
import { api } from '../../config/contants';
import FormAlimento from './FormAlimento';
import TableAlimento from './TableAlimento';
import axios from 'axios';

export default function Alimento() {
  const [ table, setTable ] = useState([]);
  const [ form, setForm ] = useState({});

  function send(data) {
    const headers = new Headers();
    const method = Object.entries(form).length > 0 ? 'put' : 'post';
    const { id } = data;
    headers.append('Content-Type', 'application/json');

    axios[method](`${api}/alimento${id ? `/${id}` : ''}`, data)
    .then(res => {
      updateTable();
      setForm({})
    });
  }

  function handleEdit(data) {
    setForm({...data});
  }

  function handleDelete(id) {
    axios.delete(`${api}/alimento/${id}`)
    .then(res => {
      updateTable();
    })
  }

  function updateTable() {
    axios.get(`${api}/alimento`)
    .then(res => {
      setTable(res.data)
    })
  }

  useEffect(() => {
    updateTable();
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
