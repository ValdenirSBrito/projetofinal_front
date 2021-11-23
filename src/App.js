import './App.css';
import Header from './components/shared/Header/header';
import Footer from './components/shared/Footer/footer';
import Home from './pages/Home/home';
import Cadastro from './pages/Cadastro/cadastro';
import { Routes, Route } from 'react-router-dom';
import View from './pages/View/view';
import Edit from './pages/Edit/edit';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;