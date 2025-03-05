import place from '../../assets/place.jpg'

function Projeto() {
  return (
    <section id="projects" className="container my-5">
      <div className="col-12 text-center mb-5">
        <h2 className="display-4 text-dark mb-4">Meus Projetos</h2>
        <p className="lead text-muted">
          Abaixo estão alguns dos projetos que desenvolvi. Cada um deles foca em um aspecto diferente do desenvolvimento web, como modularização, design responsivo e integração de APIs.
        </p>
      </div>
      <div className="row">
        {/* Projeto 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={place} // Substitua pela imagem real do projeto
              className="card-img-top"
              alt="Projeto 1"
            />
            <div className="card-body">
              <h5 className="card-title">Projeto 1</h5>
              <p className="card-text">
                Este é um projeto de exemplo, desenvolvido para demonstrar uma solução simples utilizando ReactJS. O projeto foca em modularização e boas práticas de código.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#!" className="btn btn-outline-dark">
                Ver Mais
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={place} // Substitua pela imagem real do projeto
              className="card-img-top"
              alt="Projeto 2"
            />
            <div className="card-body">
              <h5 className="card-title">Projeto 2</h5>
              <p className="card-text">
                Projeto focado em melhorar a experiência do usuário com uma interface intuitiva, utilizando as melhores práticas em design responsivo.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#!" className="btn btn-outline-dark">
                Ver Mais
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={place} // Substitua pela imagem real do projeto
              className="card-img-top"
              alt="Projeto 3"
            />
            <div className="card-body">
              <h5 className="card-title">Projeto 3</h5>
              <p className="card-text">
                Este projeto explora a integração de APIs externas e como consumir dados de forma eficiente utilizando React e Axios.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#!" className="btn btn-outline-dark">
                Ver Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projeto