import profile from "../../assets/profile.png";
import { ProgressBar } from "react-bootstrap"; // Mantendo o uso do ProgressBar do react-bootstrap

function About() {
  return (
    <section
      className="d-flex justify-content-center align-items-center vh-100 gap-3 p-4"
      id="About"
    >
      {/* Imagem de Perfil */}
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={profile}
          alt="Profile"
          style={{ width: "450px", height: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Conteúdo Sobre Mim */}
      <div className="text-center text-md-start" style={{ maxWidth: "600px" }}>
        <h2 className="display-4 mb-4">João da Sivla</h2>
        <p className="lead text-muted mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          perspiciatis quia sint saepe iusto quaerat voluptatibus facere est
          aperiam doloremque dolorem animi pariatur numquam sed.
        </p>

        {/* Botão para Exibir Formação Acadêmica */}
        <button
          className="btn btn-primary mb-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          Formação Acadêmica
        </button>

        {/* Offcanvas - Formação Acadêmica */}
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex={-1}
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title"
              id="offcanvasScrollingLabel"
            >
              Formação Acadêmica
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <p>Formação Acadêmica</p>
          </div>
        </div>

        {/* Habilidades */}
        <div className="mt-4 d-flex flex-column align-items-center">
          <div className="w-100 mb-3">
            <span className="d-block mb-2">UX</span>
            <ProgressBar animated variant="info" now={60} />
          </div>
          <div className="w-100 mb-3">
            <span className="d-block mb-2">Frontend</span>
            <ProgressBar animated variant="success" now={80} />
          </div>
          <div className="w-100 mb-3">
            <span className="d-block mb-2">Backend</span>
            <ProgressBar animated variant="dark" now={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
