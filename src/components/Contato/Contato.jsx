import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contato() {
    return (
        <section id="contact" className="container-fluid d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="row w-100">
                {/* Título e Subtítulo Centralizados */}
                <div className="col-12 text-center mb-5">
                    <h2 className="display-4 text-dark mb-4">Contato</h2>
                    <p className="lead text-muted">
                        Você pode me encontrar nas redes sociais ou me enviar uma mensagem diretamente através do formulário.
                    </p>
                </div>

                {/* Coluna da Esquerda: Informações de Contato */}
                <div className="col-12 col-md-6 text-center text-md-left mb-5 mb-md-0">
                    <h4 className="text-dark mb-4">Informações de Contato</h4>
                    <div className="mb-4">
                        <p className="text-muted">
                            <strong>Email:</strong> joao.silva@email.com
                        </p>
                        <p className="text-muted">
                            <strong>Telefone:</strong> (99) 99999-9999
                        </p>
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <a href="https://github.com/joaosilva" target="_blank" rel="noopener noreferrer" className="text-muted mx-2">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/joaosilva" target="_blank" rel="noopener noreferrer" className="text-muted mx-2">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://www.instagram.com/joaosilva" target="_blank" rel="noopener noreferrer" className="text-muted mx-2">
                            <FaInstagram size={30} />
                        </a>
                    </div>
                </div>

                {/* Coluna da Direita: Formulário de Contato */}
                <div className="col-12 col-md-6 text-center">
                    {/* Formulário de Contato - Somente Visual */}
                    <form>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Seu Nome"
                                />
                            </div>

                            <div className="col-12 col-md-8 mb-4">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Seu E-mail"
                                />
                            </div>

                            <div className="col-12 col-md-8 mb-4">
                                <textarea
                                    className="form-control form-control-lg"
                                    placeholder="Sua Mensagem"
                                    rows={5}
                                />
                            </div>

                            <div className="col-12 col-md-8">
                                <button type="submit" className="btn btn-primary btn-lg px-5">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contato