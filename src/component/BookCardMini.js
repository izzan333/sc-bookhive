function BookCardMini({ tittle, name, date, src, onClick }) {
    return (
      <div className="book-card-mini-container" onClick={onClick}>
        <img className="book-card-mini-img" src={src} />
        <p className="book-card-mini-tittle">{tittle}</p>
        <p className="book-card-mini-published">{name + " • " + date}</p>
      </div>
    );
  }
  export default BookCardMini;
  