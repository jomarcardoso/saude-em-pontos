import React from 'react';
import TableDomain from '../../components/table-domain/TableDomain';

export default function TableRefeicao({ list, ...props }) {
  console.log(list)
  return (
    <TableDomain
      columns={['Nome', 'Horário']}
      list = {list.map(item => ({ column1: item.nome, column2: `${new Date(item.horario).getHours()}:${new Date(item.horario).getMinutes()}`, ...item }))}
      {...props}
    />
  )
}
