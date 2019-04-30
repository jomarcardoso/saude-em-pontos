import React from 'react';
import { Table } from 'reactstrap';

export default function TableDomain({
  onDelete,
  onEdit,
  list = [],
  columns,
  ...props
}) {
  return (
    <Table hover size="sm" {...props}>
      <thead>
        <tr>
          <th>{columns[0]}</th>
          <th>{columns[1]}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
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
