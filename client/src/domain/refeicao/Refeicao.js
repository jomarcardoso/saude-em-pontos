import React from 'react';
import FormRefeicao from './FormRefeicao';
import TableRefeicao from './TableRefeicao';
import WithDomain from '../../components/with-domain/WithDomain';

function Refeicao({ send, form, handleEdit, handleDelete, table }) {
  return (
    <>
      <h3>Cadastro de Refeicao</h3>
      <FormRefeicao
        send={send}
        initialData={form}
      />
      <TableRefeicao
        onEdit={handleEdit}
        onDelete={handleDelete}
        list={table}
      />
    </>
  )
}

export default WithDomain(Refeicao, 'refeicao');
