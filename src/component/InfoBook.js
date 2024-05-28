import closeicon from "../icon/close.svg";
import "./InfoBookStyle.css";

function InfoBook({tittleBook, imgbook, pnd, page, seen, desc, onClick}) {
  return (
    <div className="InfoBook">
        <div className="infobook-wrapper">
            <div className="-infobook-close-container">
                <img className="infobook-close-img" src={closeicon} onClick={onClick}/>
            </div>
            <div className="infobook-main">
                <div className="infobook-tittle-container">
                    <h1 className="infobook-tittle">{tittleBook}</h1>
                </div>
                <div className="infobook-img-container">
                    <img className="infobook-img" src={imgbook}/>
                </div>
                <div className="infobook-pnd-container">
                    <p className="infobook-pnd">{pnd}</p>
                </div>
                <div className="infobook-page-container">
                    <div className="infobook-page-wrapper">
                        <p className="infobook-page-count">{page}</p>
                        <p className="infobook-page-tittle">Halaman</p>
                    </div>
                    <div className="infobook-line"/>
                    <div className="infobook-seen-wrapper">
                        <p className="infobook-seen-count">{seen}</p>
                        <p className="infobook-seen-tittle">Dilihat</p>
                    </div>
                </div>
                <div className="infobook-desc-container">
                    <p className="infobook-desc">{desc}</p>
                </div>
                <div className="infobook-btn-wrapper">
                    <button className="infobook-btn">Baca</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default InfoBook;
