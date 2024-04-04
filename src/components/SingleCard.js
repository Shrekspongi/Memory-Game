import './SingleCard.css'

export default function SingleCard(props) {

    const handleClick = () => {
        if (!props.disabled){
            props.handleChoise(props.card)
        }
    }
    return (
        <div className={props.flipped ? "flipped" : ""} key={props.card.id}>
            <div className="card">
                <img src={props.card.src} className='front' alt="front" />
                <img src="img/cover.png" onClick={handleClick} className='back' alt="back" />
            </div>
        </div>
    )
}
