import './cardprojeto.css'


function CardProjeto (props){
    return(
        <>
            <article className='cardProjeto'>
                <img src={props.image} alt="" />   
                <div className='d-flex justify-content-between flex-wrap w-100 mt-2'>
                    <span className='text_card'>{props.nome}</span>
                    <span className='text_card'>{props.data}</span>
                </div>  
                
                <p className='descri_card'>{props.texto}</p>

                <div className='d-flex justify-content-end gap-2 pe32'>
                <button type="button" className="btn btn-primary btn-sm">Demo</button>
                <button type="button" className="btn btn-primary btn-sm">Github</button>
                </div>
                          
            </article>
        </>
    )
}

export default CardProjeto