import React from 'react';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (evento) => {
    evento.preventDefault();

    console.log(evento.target);
    const nome = evento.target.nome.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const prazo = evento.target.prazo.value;
    const status = evento.target.status.value;

    const tarefa = {
      nome,
      descricao,
      prioridade,
      prazo,
      status
    }

    const request = await Api.fetchPost(tarefa);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Cadastro de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Nome da Tarefa:</label>
                  <input id="nome" className="form-control" type="text" placeholder="Nome da Tarefa" name="nome"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input id="descricao" type="text" className="form-control" placeholder="Descrição" name="descricao"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <select
                name="prioridade"
                id="prioridade"
                className="form-control"
              >
                <option value="Min">Baixa</option>
                <option value="Medio">Média</option>
                <option value="Max">Alta</option>
              </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo:</label>
                  <input id="prazo" type="text" className="form-control" placeholder="Prazo" name="prazo"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <input id="status" type="text" className="form-control"  placeholder="Status" name="status"/>
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">Enviar</button>
                <button type="button" className="btn btn-danger">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;