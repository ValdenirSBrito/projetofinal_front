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
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Descrição"
                    onChange={handleFieldsChange}
                    value={tarefa.descricao}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <select
                    value={tarefa.prioridade}
                    onChange={handleFieldsChange}
                    name="prioridade"
                    id="prioridade"
                    className="form-control"
                  >
                    <option value="">Selecione a Prioridade...</option>
                    <option value="Baixa">Baixa</option>
                    <option value="Media">Média</option>
                    <option value="Alta">Alta</option>
                  </select>
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
                  <select
                    value={tarefa.status}
                    onChange={handleFieldsChange}
                    name="status"
                    id="status"
                    className="form-control"
                  >
                    <option value="">Selecione um Status...</option>
                    <option value="Fazer">Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Feito">Feito</option>
                  </select>
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