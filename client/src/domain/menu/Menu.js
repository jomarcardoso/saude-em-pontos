import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <main>
      <ul>
        <li>
          <Link to="/alimento">Alimento</Link>
        </li>
      </ul>
    </main>
  );
}
