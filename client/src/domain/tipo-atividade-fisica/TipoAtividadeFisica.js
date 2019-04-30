import React from 'react';
import WithDomain from '../../components/with-domain/WithDomain';
import TableTipoAtividadeFisica from './TableTipoAtividadeFisica';

function TipoAtividadeFisica({ send, form, handleEdit, handleDelete, table }) {
  return (
    <>
      <h3>Cadastro de Tipo de atividade física</h3>
      {/* <FormAlimento
        send={send}
        initialData={form}
      /> */}
      <TableTipoAtividadeFisica
        onEdit={handleEdit}
        onDelete={handleDelete}
        list={table}
      />
    </>
  )
}

export default WithDomain(TipoAtividadeFisica, 'tipo-atividade-fisica');
