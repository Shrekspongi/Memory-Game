import SingleCard from "./SingleCard"

export default function Cards(props) {
    return (
        <div className="card-grid">
            {props.cards.map(card => (

                <SingleCard 
                    card={card} 
                    handleChoise={props.handleChoise} 
                    flipped = {card === props.choiceOne || card === props.choiceTwo || card.matched}
                    disabled = {props.disabled}
                />

            ))}
        </div>
    )
}