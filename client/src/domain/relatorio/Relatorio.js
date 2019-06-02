import React from 'react';
import WithDomain from '../../components/with-domain/WithDomain';
import './relatorio.scss';

function Relatorio({ send, form, handleEdit, handleDelete, table }) {
  console.log(table);
  return (
    <>
      <h3>Relatório</h3>
      <div className="row py-3">
        <div className="col">
          <div className="card">
            <div className="card-header">
              Total calorias
            </div>
            <div className="card-body">
              <h2 className="card-title text-secondary">{table.calorias}</h2>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              Total inflamatório
            </div>
            <div className="card-body">
              <h2 className="card-title text-secondary">{table.inflamatorio}</h2>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              Total acidificação
            </div>
            <div className="card-body">
              <h2 className="card-title text-secondary">{table.acidificacao}</h2>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
      <p className="Relatorio-dica lead text-center px-3 py-3 mx-auto">
        {table.dica || '...nada a declarar por enquanto'}
      </p>
    </>
  )
}

export default WithDomain(Relatorio, 'relatorio');
