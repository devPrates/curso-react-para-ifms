import ContactCard from '../ContactCard/contactCard'
import Form from 'react-bootstrap/Form';
import './contato.css'

function Contato() {
    return (
        <>
            <section className='container mt-5' id='Contato'>
                <div className='text-center'>
                    <h1 className='contact__title'>Contato</h1>
                    <p className='contact__subtitulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi corrupti perferendis doloremque exercitationem voluptatum consequatur deserunt dicta magnam laborum autem reiciendis porro voluptatem odit quis consectetur cumque, sit at.</p>
                </div>

                <article className='w-75 m-auto mt-5'>
                    <div className='d-flex justify-content-center flex-wrap gap-5'>
                        <ContactCard icon={'bx bxl-whatsapp'} title="WhatsApp" info="(67) 99999-9988" />
                        <ContactCard icon={'bx bxl-instagram'} title="instagram" info="@Gprates404" />
                        <ContactCard icon={'bx bx-envelope'} title="E-mail" info="exemplo@gmail.com" />
                    </div>
                </article>
            </section>
        </>
    )
}

export default Contato