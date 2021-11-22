import './view.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Api from '../../api/api';

const View = () => {

  const [tarefa, setTarefa] = useState({});

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

 
  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  useEffect(() => {
    getTarefaById();
  }, [])


  const { id } = useParams();
  console.log(id);

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  }

  const handleDelete = async() => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if(data.message) {
      console.log('excluido', data.message);
      navigate('/');
    }else {
      alert(data.error);
    }
  }

  return (
    <main className="viewTarefa">
    <div className="container">
      <div className="row ">
        <div className="col-2">          
        </div>
        <div className="col-6">
          <div className="card my-5">
            <h1 className="text-center my-4"><b>Nome: </b>{tarefa.nome}</h1>
            <h3 className="text-center"><b>Descrição: </b>{tarefa.descricao}</h3>
            <h4 className="text-center"><b>Prioridade: </b> {tarefa.prioridade}</h4>
            <h5 className="text-center"><b>Prazo: </b>{tarefa.prazo}</h5>
            <h6 className="text-center"><b>Data de Criação: </b>{tarefa.dataCriacao}</h6>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${tarefa._id}`} className="btn btn-success">Editar</Link>
              <button className="btn btn-danger" onClick={AbreModal}>Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
    </main>
  )
}

export default View;