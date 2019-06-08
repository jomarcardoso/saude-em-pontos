import React from 'react';
import { Table } from 'reactstrap';
import WithDomain from '../../components/with-domain/WithDomain';
import './relatorio.scss';

function Relatorio({ send, form, handleEdit, handleDelete, table }) {
  console.log(table)
  const { refeicoes = [] } = table;
  return (
    <>
      <h3>Relatório</h3>
      <div className="row py-3">
        <div className="col-sm-4 col-6">
          <div className="card text-center">
            <div className="card-header">
              INFLAMATÓRIO
            </div>
            <div className="card-body">
              <h2 className={`card-title ${table.inflamatorio < table.inflamatorioIdeal ? 'text-primary' : 'text-secondary'}`}>
                {Math.floor(table.inflamatorio || 0)}
              </h2>
              <p className="card-text lead">
                Esperado menos de {Math.floor(table.inflamatorioIdeal || 0)}
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-6">
          <div className="card text-center">
            <div className="card-header">
              ACIDIFICATANTE
            </div>
            <div className="card-body">
              <h2 className={`card-title ${table.acidificacao < 0 ? 'text-primary' : 'text-secondary'}`}>
                {table.acidificacao && table.acidificacao.toFixed(2) || 0}
              </h2>
              <p className="card-text lead">
                Esperado menos de 0
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="card text-center">
            <div className="card-header">
              CALORIAS
            </div>
            <div className="card-body">
              <h2 className={`card-title ${table.caloriasIdeal < table.calorias ? 'text-secondary' : 'text-primary'}`}>
                {Math.floor(table.calorias || 0)}
              </h2>
              <p className="card-text lead">
                Esperado menos de {Math.floor(table.caloriasIdeal || 0)}
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
      <p className="Relatorio-dica text-center px-3 py-3 mx-auto">
        {table.dica || '...nada a declarar por enquanto'}
      </p>
      <h4>Refeições</h4>
      {
        refeicoes.map(({ nome, horario, alimentosQuantidades, inflamatorio, acidificacao, calorias }) => (
          <div className="my-3 py-2">
            <h5>{nome}</h5>
            <Table bordered size="sm">
              <thead className="thead-dark">
                <tr>
                  <th>
                    alimento
                  </th>
                  <th>
                    quantidade
                  </th>
                </tr>
              </thead>
              <tbody>
                {alimentosQuantidades.map(({ alimento: { nome }, quantidade }) => (
                  <tr>
                    <td>{nome}</td>
                    <td>{quantidade}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>inflamatório</th>
                  <th>{inflamatorio}</th>
                </tr>
                <tr>
                  <th>acidificante</th>
                  <th>{acidificacao}</th>
                </tr>
                <tr>
                  <th>calorias</th>
                  <th>{calorias}</th>
                </tr>
              </tfoot>
            </Table>
          </div>
        ))
      }
    </>
  )
}

export default WithDomain(Relatorio, 'relatorio');
