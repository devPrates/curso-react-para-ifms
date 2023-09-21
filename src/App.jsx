import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projeto from './components/Projetos/Projeto';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projeto />
      <Contato />
      <Footer />
    </>
  )
}

export default App
