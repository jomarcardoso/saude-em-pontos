import React from 'react';
import WithDomain from '../../components/with-domain/WithDomain';
import './relatorio.scss';

function Relatorio({ send, form, handleEdit, handleDelete, table }) {
  console.log(table)
  return (
    <>
      <h3>Relatório</h3>
      <div className="row py-3">
        <div className="col">
          <div className="card">
            <div className="card-header">
              Total calorias
            </div>
            <div className="card-body  text-center">
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
        <div className="col">
          <div className="card">
            <div className="card-header">
              Total inflamatório
            </div>
            <div className="card-body text-center">
              <h2 className={`card-title ${'text-secondary'}`}>
                {Math.floor(table.inflamatorio || 0)}
              </h2>
              <p className="card-text lead">
                Esperado menos de {Math.floor(table.inflamatorioIdeal || 0)}
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              Total acidificação
            </div>
            <div className="card-body text-center">
              <h2 className={`card-title ${'text-secondary'}`}>
                {Math.floor(table.acidificacao || 0)}
              </h2>
              <p className="card-text lead">
                Esperado menos de {Math.floor(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="Relatorio-dica text-center px-3 py-3 mx-auto">
        {table.dica || '...nada a declarar por enquanto'}
      </p>
    </>
  )
}

export default WithDomain(Relatorio, 'relatorio');
