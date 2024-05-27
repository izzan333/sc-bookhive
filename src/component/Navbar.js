import "./NavbarStyle.css";
import homeicon from "../icon/home.svg";
import libraryicon from "../icon/library.svg";
import bookmarkicon from "../icon/bookmark.svg";
import settingsicon from "../icon/settings.svg";
import infoicon from "../icon/info.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-wrapper">
        <ul>
          <li>
            <img className="home-img" src={homeicon}/>
            <p>Home</p>
          </li>
          <li>
          <img className="library-img" src={libraryicon}/>
            <p>Library</p>
          </li>
          <li>
          <img className="favorite-img" src={bookmarkicon}/>
            <p>Favorite</p>
          </li>
          <li>
          <img className="settings-img" src={settingsicon}/>
            <p>Settings</p>
          </li>
          <li>
          <img className="about-img" src={infoicon}/>
            <p>About</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
