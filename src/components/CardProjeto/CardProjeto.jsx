import './cardprojeto.css'


function CardProjeto (props){
    return(
        <>
            <article className='cardProjeto'>
                <img src={props.image} alt="" />   
                <div className='d-flex justify-content-between w-100 mt-2'>
                    <span>{props.nome}</span>
                    <span>{props.data}</span>
                </div>  
                
                <p>{props.texto}</p>

                <div className='d-flex justify-content-end gap-2 pe32'>
                <button type="button" className="btn btn-primary btn-sm">Demo</button>
                <button type="button" className="btn btn-primary btn-sm">Github</button>
                </div>
                          
            </article>
        </>
    )
}

export default CardProjeto