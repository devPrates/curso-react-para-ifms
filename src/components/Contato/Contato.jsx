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

                <article className='d-flex justify-content-around w-75 m-auto mt-5'>
                    <div className='d-flex flex-column gap-2'>
                        <ContactCard icon={'bx bxl-whatsapp'} title="WhatsApp" info="(67) 99999-9988" />
                        <ContactCard icon={'bx bxl-whatsapp'} title="WhatsApp" info="(67) 99999-9988" />
                        <ContactCard icon={'bx bxl-whatsapp'} title="WhatsApp" info="(67) 99999-9988" />
                    </div>

                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Assunto </Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Coneudo</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>

                    </div>
                </article>
            </section>
        </>
    )
}

export default Contato