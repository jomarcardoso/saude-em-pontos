import React, { useState, useEffect } from 'react';

import { api } from '../config/contants';

export default function HOCCadastro() {
  return function () {
    const [table, setTable] = useState([]);
    console.log(table)

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

    useEffect(() => {
      // getTable();
    });

    return (
      <wrappedComponent table={table} getTable={getTable} />
    )
  }
}
