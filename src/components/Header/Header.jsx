import "./header.css"

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
                <div className="container"> 
                    <a className="navbar-brand" href="#"><span>&lt;</span> DevPratres <span>/&gt;</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span>&lt;</span> DevPratres <span>/&gt;</span></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#About">Sobre Mim</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Skills">Skills</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#Projetos">Projetos</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#Contato">Contato</a>
                                </li>
                            </ul>  
                            <button type="button" className="btn btn-primary btn-sm">Baixar Curriculo</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header