import './footer.css'

function Footer() {
    return (
        <>

            <section className='d-flex flex-column gap-1 justify-content-center align-items-center mt-5 footer'>
                <div className='mt-4'>
                    <h5><span>&lt;</span> DevPratres <span>/&gt;</span></h5>
                </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Sobre Mim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Contato</a>
                        </li>
                    </ul>

                    <div className="d-flex gap-2 ">
                            <i className='bx bxl-github icon'></i>
                            <i className='bx bxl-linkedin-square icon'></i>
                            <i className='bx bxl-instagram-alt icon'></i>
                            <i className='bx bxl-facebook-square icon'></i>
                    </div>

                    <div className='py-3 bg-secondary w-100 d-flex justify-content-center mt-4' >
                        <span>&copy; <span>devPrates</span> Todos os direitos reservados.</span>
                    </div>
            </section>
        </>
    )
}

export default Footer