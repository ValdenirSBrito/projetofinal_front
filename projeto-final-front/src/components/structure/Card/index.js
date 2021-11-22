import './card.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const tarefa = props.data;
  return (
    <Link to={`/view/${tarefa._id}`} className="col">
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">{tarefa.nome}</h5>
          <span className="card-text">{tarefa.descricao}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card;