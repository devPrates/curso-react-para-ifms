import "./about.css"
import profile from "../../assets/profile.png"
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {

  return (
    <>
      <section className="container d-flex justify-content-center align-items-center gap-3 mt-5" id="About">
        <div className="about__image">
          <img src={profile} alt="" />
        </div>

        <div className="about__skills">
          <h2>Sobre Mim</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis quia sint saepe iusto quaerat voluptatibus facere est aperiam doloremque dolorem animi pariatur numquam sed.</p>
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Formação Academica</button>

          <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Formação Academica</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Formação Academica</p>
            </div>
          </div>

          <div className="about__info d-flex flex-column gap-3 mt-3">
            <div className="info__item ">
              <span className="ps-1">UX</span>
              <ProgressBar animated variant="info" now={40} />
            </div>
            <div className="info__item ">
              <span className="ps-1">Frontend</span>
              <ProgressBar animated variant="success" now={80} />
            </div>
            <div className="info__item ">
              <span className="ps-1">Backend</span>
              <ProgressBar animated variant="dark" now={50} />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About