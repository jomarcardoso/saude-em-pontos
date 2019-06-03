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
            <td className="text-right">
              <button className="btn btn-secondary" onClick={() => onEdit(item)} type="button">
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button className="btn btn-secondary ml-1" onClick={() => onDelete(item.id)} type="button">
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
