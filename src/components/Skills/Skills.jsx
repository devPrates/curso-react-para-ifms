import Cardskills from '../CardSkill/CardSkill'
import './skills.css'
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import nodejs from "../../assets/nodejs.png"
import postgresql from "../../assets/postgresql.png"

function Skills (){
    return(
        <>
            <section className='container mt-5' id='Skills'>
                <div className='text-center'>
                    <h1 className='skills__title'>Skills</h1>
                    <p className='Skills__subtitulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi corrupti perferendis doloremque exercitationem voluptatum consequatur deserunt dicta magnam laborum autem reiciendis porro voluptatem odit quis consectetur cumque, sit at.</p>
                </div>

                <div className='d-flex gap-4 justify-content-center flex-wrap mt-5'>
                    <Cardskills image={js} text="JavaScript"/>
                    <Cardskills image={react} text="React"/>
                    <Cardskills image={nodejs} text="Node.JS"/>
                    <Cardskills image={postgresql} text="PostgreSQL"/>
                </div>
                
                <div className='d-flex gap-4 justify-content-center flex-wrap'>
                    <Cardskills image={js} text="JavaScript"/>
                    <Cardskills image={react} text="React"/>
                    <Cardskills image={nodejs} text="Node.JS"/>
                    <Cardskills image={postgresql} text="PostgreSQL"/>
                </div>
            </section>
        </>
    )
}

export default Skills