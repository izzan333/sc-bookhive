import "./NavbarStyle.css";
import homeicon from "../icon/home.svg";
import libraryicon from "../icon/library.svg";
import bookmarkicon from "../icon/bookmark.svg";
import settingsicon from "../icon/settings.svg";
import infoicon from "../icon/info.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-wrapper">
        <ul>
          <li>
            <Link to={"/"}>
              <img className="home-img" src={homeicon} />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to={"/Library"}>
              <img className="library-img" src={libraryicon} />
              <p>Library</p>
            </Link>
          </li>
          <li>
            <Link to={"/Favorite"}>
              <img className="favorite-img" src={bookmarkicon} />
              <p>Favorite</p>
            </Link>
          </li>
          <li>
            <Link to={"/Settings"}>
              <img className="settings-img" src={settingsicon} />
              <p>Settings</p>
            </Link>
          </li>
          <li>
            <Link to={"/About"}>
              <img className="about-img" src={infoicon} />
              <p>About</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
