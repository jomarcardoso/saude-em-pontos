import React from 'react';
import WithDomain from '../../components/with-domain/WithDomain';

function Relatorio({ send, form, handleEdit, handleDelete, table }) {
  console.log(table);
  return (
    <>
      <h3>Relatório</h3>
      <div className="row">
        <div className="col">
          <div class="card">
            <div class="card-header">
              Total calorias
            </div>
            <div class="card-body">
              <h5 class="card-title">{table.calorias}</h5>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-header">
              Total inflamatório
            </div>
            <div class="card-body">
              <h5 class="card-title">{table.inflamatorio}</h5>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-header">
              Total acidificação
            </div>
            <div class="card-body">
              <h5 class="card-title">{table.acidificacao}</h5>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithDomain(Relatorio, 'relatorio');
