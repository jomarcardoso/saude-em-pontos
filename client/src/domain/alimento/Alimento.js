import React from 'react';
import FormAlimento from './FormAlimento';
import TableAlimento from './TableAlimento';
import WithDomain from '../../components/with-domain/WithDomain';

function Alimento({ send, form, handleEdit, handleDelete, table }) {
  return (
    <>
      <h3>Cadastro de Alimento</h3>
      <FormAlimento
        send={send}
        initialData={form}
      />
      <TableAlimento
        onEdit={handleEdit}
        onDelete={handleDelete}
        list={table}
      />
    </>
  )
}

export default WithDomain(Alimento, 'alimento');
