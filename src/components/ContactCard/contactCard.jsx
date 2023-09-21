import './contactcard.css'

function ContactCard(props){
    return (
        <>
            <article className='cardContact'>
                <i className={props.icon}></i>
                <span className='title_contact'>{props.title}</span>
                <span className='info_contact'>{props.info}</span>
                <button type="button" class="btn btn-primary btn-sm card-btn mt-3">Enviar Mensagem</button>
            </article>
        </>
    )
}

export default ContactCard