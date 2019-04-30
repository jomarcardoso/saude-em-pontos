import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as MeetIcon } from '../../img/icons/alimento.svg';
import { ReactComponent as FoodIcon } from '../../img/icons/refeicao.svg';
import { ReactComponent as ExerciseIcon } from '../../img/icons/exercicio.svg';
import { ReactComponent as ActivityIcon } from '../../img/icons/atividade-fisica.svg';
import { ReactComponent as TypeActivityIcon } from '../../img/icons/tipo-atividade-fisica.svg';

export default function Menu() {
  return (
    <main>
      <Row>
        <Col xs="6" sm="4">
          <Link to="/alimento" className="p-3 pb-4 d-block">
            <div className="px-4 py-1">
              <MeetIcon />
            </div>
            <h4 className="text-dark text-center mt-2">Alimento</h4>
          </Link>
        </Col>
        <Col xs="6" sm="4">
          <Link to="/refeicao" className="p-3 pb-4 d-block">
            <div className="px-4 py-1">
              <FoodIcon />
            </div>
            <h4 className="text-dark text-center mt-2">Refeição</h4>
          </Link>
        </Col>
        <Col xs="6" sm="4">
          <Link to="/exercicio" className="p-3 pb-4 d-block">
            <div className="px-4 py-1">
              <ExerciseIcon />
            </div>
            <h4 className="text-dark text-center mt-2">Exercício</h4>
          </Link>
        </Col>
        <Col xs="6" sm="4">
          <Link to="/atividade-fisica" className="p-3 pb-4 d-block">
            <div className="px-4 py-1">
              <ActivityIcon />
            </div>
            <h4 className="text-dark text-center mt-2">Atividade física</h4>
          </Link>
        </Col>
        <Col xs="6" sm="4">
          <Link to="/tipo-atividade-fisica" className="p-3 pb-4 d-block">
            <div className="px-4 py-1">
              <TypeActivityIcon />
            </div>
            <h4 className="text-dark text-center mt-2">Tipo de atividade física</h4>
          </Link>
        </Col>
      </Row>
    </main>
  );
}
