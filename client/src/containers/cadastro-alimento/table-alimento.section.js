import React, { useState } from 'react';
import { Table } from 'reactstrap';

export default function TableAlimento({ table }) {
  return(
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Calorias</th>
        </tr>
        {table.map((row) => (
          <tr>
            <td>{row.nome}</td>
            <td>{row.calorias}</td>
          </tr>
        ))}
      </thead>
    </Table>
  );
}
