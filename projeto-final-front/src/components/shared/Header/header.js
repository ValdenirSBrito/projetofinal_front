import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <main className="Menu">
    <nav className="navbar  navbar-expand-lg navbar-light w-100">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          Lista de Tarefas
        </Link>
        <div className="ms-auto">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro">
                 Cadastro
                </Link>
              </li>
           </ul>
          </div>
        </div>
      </div>
    </nav>
    </main>
  )
}

export default Header;