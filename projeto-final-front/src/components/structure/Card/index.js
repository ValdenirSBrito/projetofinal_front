import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // objeto musica
  const tarefa = props.data;
  return (
    <Link to={`/view/${tarefa._id}`} className="col">
      <div className="card">
        <img src={tarefa.capa} alt={tarefa.nome} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{tarefa.nome}</h5>
          <span className="badge bg-primary">{tarefa.descricao}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card;