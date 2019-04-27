import React from 'react';
import { Table } from 'reactstrap';

export default function TableAlimento({ onDelete, onEdit, list = [], ...props }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Calorias</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>{item.calorias}</td>
            <td>
              <span onClick={() => onEdit(item)}>editar</span>
              <span onClick={() => onDelete(item.id)}> excluir</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
