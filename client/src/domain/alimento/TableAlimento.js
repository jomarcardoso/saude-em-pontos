import React from 'react';
import { Table } from 'reactstrap';

export default function TableAlimento({ list = [], ...props }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Calorias</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr>
            <td>{item.nome}</td>
            <td>{item.calorias}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
