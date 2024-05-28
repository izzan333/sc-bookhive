function RecomendCard({ tittle, name, date , src, onClick }) {
  return (
    <div className="recomend-card-container" onClick={onClick}>
      <img className="recomend-card-img" src={src} />
      <p className="recomend-card-tittle">{tittle}</p>
      <p className="recomend-card-published">{name + " • " + date}</p>
    </div>
  );
}
export default RecomendCard;
