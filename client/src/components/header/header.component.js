import React from 'react';
import { Container } from 'reactstrap';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="Header navbar navbar-dark bg-dark box-shadow">
      <Container>
        <h2>
          <Link to="/">
            Saúde em pontos
          </Link>
        </h2>
      </Container>
    </header>
  )
}
