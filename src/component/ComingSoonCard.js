function ComingSoonCard({img, tittle}) {
    return (
        <div className="comingsoon-card-container">
            <img className="img-comingsoon-card" src={img}/>
            <p className="tittle-comingsoon-card">{tittle}</p>
        </div>
    );
}
export default ComingSoonCard;