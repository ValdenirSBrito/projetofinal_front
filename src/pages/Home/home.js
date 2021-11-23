import React from 'react'
import ListTarefa from '../../components/structure/ListTarefa';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center h1">LISTA DE TAREFAS</h1>
      <ListTarefa/>
    </div>
  )
}

export default Home;