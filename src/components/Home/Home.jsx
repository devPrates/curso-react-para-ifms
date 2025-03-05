import "./home.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../../assets/profile.png"

const Home = () => {

    return (
        <section className="container-fluid d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="row w-100 align-items-center"> {/* Adicionando align-items-center aqui */}
          {/* Imagem à Esquerda */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={profile} // Substitua por sua imagem real
              alt="João da Silva"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "50%" }}
            />
          </div>

          {/* Conteúdo à Direita */}
          <div className="col-md-6 text-center text-md-start">
            <h1>João da Silva</h1>
            <p>
              Desenvolvedor Front-End com foco em criar interfaces agradáveis e funcionais. Estou sempre
              buscando aprender novas tecnologias e melhorar minhas habilidades.
            </p>
            <div>
              <a href="https://github.com/joaodasilva" target="_blank" rel="noreferrer"  className="btn btn-outline-dark m-2">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/joaodasilva" target="_blank" rel="noreferrer" className="btn btn-outline-dark m-2">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://twitter.com/joaodasilva" target="_blank" rel="noreferrer" className="btn btn-outline-dark m-2">
                <FaTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

    )
}
export default Home