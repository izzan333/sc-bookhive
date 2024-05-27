function BookCardMini({ tittle, name, date, src }) {
    return (
      <div className="book-card-mini-container">
        <img className="book-card-mini-img" src={src} />
        <p className="book-card-mini-tittle">{tittle}</p>
        <p className="book-card-mini-published">{name + " • " + date}</p>
      </div>
    );
  }
  export default BookCardMini;
  