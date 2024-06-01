import { BrowserRouter as Routing, Routes, Route} from "react-router-dom";
import "./component/NavbarStyle.css";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Library from "./page/Library";
import Settings from "./page/Settings";
import Favorite from "./page/Favorite";
import About from "./page/About";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <Routing>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Library" element={<Library/>}/>
          <Route path="/Favorite" element={<Favorite/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        <Navbar />
      </Routing>

    </div>
  );
}

export default App;
