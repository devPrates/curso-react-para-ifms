import CardProjeto from '../CardProjeto/CardProjeto'
import './projeto.css'
import place from '../../assets/place.jpg'

function Projeto() {
    return (
        <>
            <section className='container mt-5' id='Projetos'>
                <div className='text-center'>
                    <h1>Projetos</h1>
                    <p className='projeto__subtitulo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia omnis accusamus, corporis eos unde voluptate maiores quasi vel repellendus fuga expedita minus totam voluptatibus, nesciunt tenetur officiis repellat maxime qui!</p>
                </div>

                <article className='w-100 d-flex flex-column align-items-center mt-5'>
                    <ul className="nav nav-pills mb-3 d-flex gap-4" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Todos</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Frontend</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Backend</button>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className='d-flex w-100 gap-5 flex-wrap align-items-center justify-content-center'>
                            <CardProjeto image={place} nome="Portifolio" data="17/09/23" texto="Please add your content here. Keep it short and simple. And smile :)"/>
                            <CardProjeto image={place} nome="Portifolio" data="17/09/23" texto="Please add your content here. Keep it short and simple. And smile :)"/>
                            <CardProjeto image={place} nome="Portifolio" data="17/09/23" texto="Please add your content here. Keep it short and simple. And smile :)"/>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                        <div className='d-flex w-100 gap-5 flex-wrap align-items-center justify-content-center'>
                            <CardProjeto image={place} nome="Portifolio" data="17/09/23" texto="Please add your content here. Keep it short and simple. And smile :)"/>
                            <CardProjeto image={place} nome="Portifolio" data="17/09/23" texto="Please add your content here. Keep it short and simple. And smile :)"/>
                            
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                        <div className='d-flex w-100 gap-5 flex-wrap align-items-center justify-content-center'>
                            <CardProjeto image={place} nome="Portifolio" data="17/09/23" texto="Please add your content here. Keep it short and simple. And smile :)"/>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Projeto