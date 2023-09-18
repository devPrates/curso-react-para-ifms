import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import CardProjeto from './components/CardProjeto/CardProjeto';
import Projeto from './components/Projetos/Projeto';

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projeto />
    </>
  )
}

export default App
