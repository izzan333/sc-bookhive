import "./LibraryStyle.css";
import brandImg from "../img/logo192.png";
import notifImg from "../icon/notifications.svg";
import profileImg from "../icon/account.svg";
import BookCardMini from "../component/BookCardMini";

function Library() {
  return (
    <div className="Library">
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-top-l">
            <img className="img-brand" src={brandImg} />
            <h1 className="txt-brand">BookHive</h1>
          </div>
          <div className="header-top-r">
            <img className="notif-img" src={notifImg} />
            <img className="profile-img" src={profileImg} />
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-container">
          <div className="search-bar-container">
            <input
              type="Text"
              className="searchbar"
              placeholder="Cari Buku Kesukaan Mu..."
            />
          </div>
          <div className="container-book">
            <div className="library-slider">
              <BookCardMini />
              <BookCardMini />
              <BookCardMini />
              <BookCardMini />
              <BookCardMini />
              <BookCardMini />
              <BookCardMini />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
