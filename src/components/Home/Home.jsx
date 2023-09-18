import React from "react"
import "./home.css"
import profile from "../../assets/profile.png"


const Home = () => {

    return (
        <>
        <section className="container" id="Home"> 
            <div className="d-flex home_container justify-content-center align-items-center flex-wrap gap-5">
                <div className="home_descricao">
                            <p>Olá, Eu sou</p>
                            <h3>Jãozinho do Grau</h3>
                            <h1>Desenvolvedor</h1>
                            <h1>De Software</h1>

                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis, hic, dignissimos similique provident optio magni ducimus nisi iure, placeat ut reiciendis doloribus expedita magnam explicabo ratione velit illo tempora?</p>
                            <div className="d-flex flex-wrap gap-3 home_buttons">
                             <button type="button" className="btn btn-primary btn-sm">Contato</button>

                             <button type="button" className="btn btn-primary btn-sm">Baixar Curriculo</button>
                            </div>
                </div>
                <div className="profile W-25 d-flex flex-column align-items-center gap-4">
                <img src={profile} alt="" />
                            <div className="d-flex gap-2 ">
                            <i className='bx bxl-github icon'></i>
                            <i className='bx bxl-linkedin-square icon'></i>
                            <i className='bx bxl-instagram-alt icon'></i>
                            <i className='bx bxl-facebook-square icon'></i>
                            </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home