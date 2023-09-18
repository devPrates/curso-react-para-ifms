import './cardskills.css'

function Cardskills(props) {
    return(
        <>
            <div className='card__skill d-flex flex-column justify-content-center align-items-center gap-2'>
                <img src={props.image} alt="" />
                <span>{props.text}</span>
            </div>
        </>
    )
}

export default Cardskills