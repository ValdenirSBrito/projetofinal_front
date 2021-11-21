import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();
  
  const [tarefa, setTarefa] = useState({
    nome: '',
    descricao: '',
    prioridade: '',
    prazo: '',
    status: ''
  });
  
  useEffect(() => {
    getTarefaById();
  }, []);

  const { id } = useParams();

  
  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {
   
    const tarefaEdit = { ...tarefa };
   
    tarefaEdit[evento.target.name] = evento.target.value;
    
    setTarefa(tarefaEdit);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/view/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Edição da Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Nome da Tarefa:</label>
                  <input
                    id="nome"
                    className="form-control"
                    type="text"
                    placeholder="Nome da musica"
                    value={tarefa.nome}
                    onChange={handleFieldsChange}
                    name="nome"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input
                    id="autor"
                    type="text"
                    className="form-control"
                    placeholder="Nome do autor"
                    onChange={handleFieldsChange}
                    value={tarefa.descricao}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <input
                    id="prioridade"
                    type="text"
                    className="form-control"
                    onChange={handleFieldsChange}
                    value={tarefa.prioridade}
                    placeholder="Prioridade"
                    name="prioridade"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo:</label>
                  <input
                    id="prazo"
                    type="text"
                    onChange={handleFieldsChange}
                    value={tarefa.prazo}
                    className="form-control"
                    placeholder="Prazo"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <input
                    id="status"
                    type="text"
                    onChange={handleFieldsChange}
                    value={tarefa.status}
                    className="form-control"
                    placeholder="Status da musica"
                    name="status"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
                <button type="button" className="btn btn-danger">
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;