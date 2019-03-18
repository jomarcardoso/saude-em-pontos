import React from 'react';
import { Container } from 'reactstrap';
import './header.scss';

export default function Header(props) {
  return (
    <header className="Header bg-success text-light">
      <Container>
        <h2>
          Saúde em pontos
        </h2>
      </Container>
    </header>
  )
}
