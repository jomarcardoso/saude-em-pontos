import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getDisplayName } from '../../utils/react';
import { api } from '../../config/contants';

/**
 *
 * @param {node} WrappedComponent
 * @param {object} initialData
 */
export default function WithDomain(WrappedComponent, domainName) {
  function Domain(props) {
    const [ table, setTable ] = useState([]);
    const [ form, setForm ] = useState({});

    function send(data) {
      const headers = new Headers();
      const method = Object.entries(form).length > 0 ? 'put' : 'post';
      const { id } = data;
      headers.append('Content-Type', 'application/json');

      axios[method](`${api}/${domainName}${id ? `/${id}` : ''}`, data)
      .then(res => {
        updateTable();
        setForm({})
      });
    }

    function handleEdit(data) {
      setForm({...data});
    }

    function handleDelete(id) {
      axios.delete(`${api}/${domainName}/${id}`)
      .then(res => {
        updateTable();
      })
    }

    function updateTable() {
      axios.get(`${api}/${domainName}`)
      .then(res => {
        setTable(res.data)
      })
    }

    useEffect(() => {
      updateTable();
    }, []);

    return (
      <WrappedComponent
        send={send}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        table={table}
        form={form}
        {...props}
      />
    )
  }

  Domain.displayName = `Domain(${getDisplayName(WrappedComponent)})`;
  return Domain;
}
