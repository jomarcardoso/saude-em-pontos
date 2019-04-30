import React from 'react';
import TableDomain from '../../components/table-domain/TableDomain';

export default function TableTipoAtividadeFisica({ list, ...props }) {
  return (
    <TableDomain
      columns={['Nome', 'Multiplicador de intensidade']}
      list = {list.map(item => ({ column1: item.nome, column2: item.multiplicadorIntensidade, ...item }))}
      {...props}
    />
  )
}
