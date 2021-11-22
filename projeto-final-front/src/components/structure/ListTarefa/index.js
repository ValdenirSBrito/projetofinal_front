import React, { useState, useEffect } from 'react'
import Card from '../Card';


const ListTarefas = () => {

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();
  }, [])


  const getTarefas = async () => {
    const request = await fetch('http://localhost:3000/tarefas')

    const data = await request.json();

    setTarefas(data);
  }

 
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">  
      {tarefas.map((tarefa) => (
        <Card data={tarefa} key={tarefa._id}/>
      ))}
    </div>
  )
}

export default ListTarefas;