function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
             {/* { props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src="./star.png" className="star--icon"></img>
                <p>{props.stats.rating}<span>({props.stats.reviewCount}).{props.location}</span></p>
            </div>
            <p className="card--title">{props.title}</p>
            <h1 className="card--price">From ${props.price}<span>/person</span></h1>
        </div>
    )
}

export default Card