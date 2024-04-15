import "./card.scss"

export function Card({item, cardClass, nextEff, prevEff}){
    
    return(
        <div
            className={`
                        slider--card
                        ${cardClass} 
                        ${nextEff ? "next_anim" : ""} 
                        ${prevEff ? "prev_anim" : ""}`}
        >
            <div
                className="card-banner"
                style={{
                    backgroundImage: `url(${item?.image})`,
                }}
            ></div>
            <div className="card-body">
                {item?.name}
            </div>
            <div className="card-footer">
                {item?.description}
            </div>

        </div>
    )
}