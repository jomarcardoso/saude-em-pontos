import React from 'react';
import TableDomain from '../../components/table-domain/TableDomain';

export default function TableRefeicao({ list, ...props }) {
  return (
    <TableDomain
      columns={['Nome', 'Calorias']}
      list = {list.map(item => ({ column1: item.nome, column2: item.calorias, ...item }))}
      {...props}
    />
  )
}
