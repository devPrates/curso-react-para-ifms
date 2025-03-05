import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

function Skills() {
    return (
        <section id="skills" className="container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="text-center">
                <div className="col-12 text-center mb-5">
                    <h2 className="display-4 text-dark mb-4">Minhas habilidades</h2>
                    <p className="lead text-muted">
                        Abaixo estão algumas das habilidades que possuo. Estou sempre buscando aprender mais e melhorar minhas competências.
                    </p>
                </div>

                {/* Cards das habilidades */}
                <div className="row justify-content-center">
                    {/* Habilidade 1: HTML */}
                    <div className="col-6 col-md-2 mb-4">
                        <div className="skill-card p-4 rounded-3 shadow-lg bg-white d-flex flex-column align-items-center justify-content-center">
                            <FaHtml5 size={80} className="text-muted mb-3" />
                            <h5 className="text-muted">HTML5</h5>
                        </div>
                    </div>

                    {/* Habilidade 2: CSS */}
                    <div className="col-6 col-md-2 mb-4">
                        <div className="skill-card p-4 rounded-3 shadow-lg bg-white d-flex flex-column align-items-center justify-content-center">
                            <FaCss3Alt size={80} className="text-muted mb-3" />
                            <h5 className="text-muted">CSS3</h5>
                        </div>
                    </div>

                    {/* Habilidade 3: JavaScript */}
                    <div className="col-6 col-md-2 mb-4">
                        <div className="skill-card p-4 rounded-3 shadow-lg bg-white d-flex flex-column align-items-center justify-content-center">
                            <FaJs size={80} className="text-muted mb-3" />
                            <h5 className="text-muted">JavaScript</h5>
                        </div>
                    </div>

                    {/* Habilidade 4: React */}
                    <div className="col-6 col-md-2 mb-4">
                        <div className="skill-card p-4 rounded-3 shadow-lg bg-white d-flex flex-column align-items-center justify-content-center">
                            <FaReact size={80} className="text-muted mb-3" />
                            <h5 className="text-muted">React</h5>
                        </div>
                    </div>

                    {/* Habilidade 5: Node.js */}
                    <div className="col-6 col-md-2 mb-4">
                        <div className="skill-card p-4 rounded-3 shadow-lg bg-white d-flex flex-column align-items-center justify-content-center">
                            <FaNodeJs size={80} className="text-muted mb-3" />
                            <h5 className="text-muted">Node.js</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills