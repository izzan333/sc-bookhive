import React, { useState, useEffect } from "react";
import "./App.css";
import "./component/footer.css"
import "./component/BreakPoint.css"
import profile from "./icon/logo.svg";
import notificon from "./icon/notifications.svg";
import menuicon from "./icon/menu.svg";
import homeicon from "./icon/home.svg";
import libraryicon from "./icon/library.svg";
import bookmarkicon from "./icon/bookmark.svg";
import settingsicon from "./icon/settings.svg";
import infoicon from "./icon/info.svg";
import RecomendCard from "./component/RecomendCard";
import dilanimg from "./img/dilanposter.jpg";
import BookCardMini from "./component/BookCardMini";
import ComingSoonCard from "./component/ComingSoonCard";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="top-header">
            <div className="top-left">
              <img className="logo" src={profile}></img>
              <h3 className="brandname">BookHive</h3>
            </div>
            <div className="top-right">
              <img className="notification" src={notificon}></img>
              <img className="profile" src={profile}></img>
            </div>
          </div>
          <div className="btm-header">
            <h1 className="judul">
              DIGITALISASI <br />
              PERPUSTAKAAN
            </h1>
            <p className="judul-p">
              Platform modern yang membawa dunia literatur ke ujung jari Anda.
              Nikmati koleksi buku digital tanpa batas, jelajahi pengetahuan,
              dan temukan karya-karya inspiratif dari berbagai genre.
            </p>
            <button className="jelajahi-btn">Jelajahi</button>
          </div>
        </div>
      </header>
      <body>
        <div className="container-body">
          <div className="recomend-layout">
            <div className="recomend-tittle">
              <h3>Rekomendasi Untuk Anda</h3>
            </div>
            <div className="recomend-scroll">
              <RecomendCard
                tittle={"Mahluk Mars"}
                name={"Steve"}
                date={"2020"}
                src={dilanimg}
              />
              <RecomendCard
                tittle={"Dilan 1990"}
                name={"Pidi Baiq"}
                date={"2014"}
                src={dilanimg}
              />
              <RecomendCard
                tittle={"Milea Suara Dari Dilan"}
                name={"Pidi Baiq"}
                date={"2016"}
                src={dilanimg}
              />
              <RecomendCard
                tittle={"Stellarium"}
                name={"Steve"}
                date={"2010"}
                src={dilanimg}
              />
              <RecomendCard
                tittle={"Kalkulus 1"}
                name={"Bambang"}
                date={"2007"}
                src={dilanimg}
              />
              <RecomendCard
                tittle={"Kalkulus 2"}
                name={"Luqman"}
                date={"2000"}
                src={dilanimg}
              />
              <RecomendCard
                tittle={"Bahasa Inggris"}
                name={"Tita"}
                date={"2015"}
                src={dilanimg}
              />
            </div>
          </div>
          <div className="searchlay-n-newslay-container">
            <div className="search-layout-left">
              <div className="search-bar">
                <input
                  className="input-search-bar"
                  type="text"
                  placeholder="Cari Buku Kesukaan Mu..."
                />
              </div>
              <div className="book-search">
                <BookCardMini
                  tittle={"Penghuni Surga"}
                  name={"Andi"}
                  date={"2017"}
                  src={dilanimg}
                />
                <BookCardMini
                  tittle={"Penghuni Surga"}
                  name={"Andi"}
                  date={"2017"}
                  src={dilanimg}
                />
                <BookCardMini
                  tittle={"Penghuni Surga"}
                  name={"Andi"}
                  date={"2017"}
                  src={dilanimg}
                />
                <BookCardMini
                  tittle={"Penghuni Surga"}
                  name={"Andi"}
                  date={"2017"}
                  src={dilanimg}
                />
                <BookCardMini
                  tittle={"Penghuni Surga"}
                  name={"Andi"}
                  date={"2017"}
                  src={dilanimg}
                />
                <BookCardMini
                  tittle={"Penghuni Surga"}
                  name={"Andi"}
                  date={"2017"}
                  src={dilanimg}
                />
              </div>
              <div className="container-lihat-semua-btn">
                <button className="lihat-semua-btn">Lihat Semua</button>
              </div>
            </div>
            <div className="news-layout-container">
              <div className="container-terbaru">
                <div className="tittle-terbaru">
                  <p>Terbaru</p>
                </div>
                <div className="terbaru-scroll">
                  <RecomendCard
                    tittle={"Kalkulus 2"}
                    name={"Luqman"}
                    date={"2023"}
                    src={dilanimg}
                  />
                  <RecomendCard
                    tittle={"Kalkulus 2"}
                    name={"Luqman"}
                    date={"2023"}
                    src={dilanimg}
                  />
                  <RecomendCard
                    tittle={"Kalkulus 2"}
                    name={"Luqman"}
                    date={"2023"}
                    src={dilanimg}
                  />
                </div>
              </div>
              <div className="container-segera-datang">
                <div className="tittle-comingsoon">
                  <p>Segera Datang</p>
                </div>
                <div className="comingsoon-scroll">
                  <ComingSoonCard img={dilanimg} tittle={"Pergi Jauh"}/>
                  <ComingSoonCard img={dilanimg} tittle={"Yang Lalu"}/>
                  <ComingSoonCard img={dilanimg} tittle={"Pemograman Basic"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <div className="footer-container">
          <div className="footer-grid-container">
            <div className="footer-top">
              <div className="footer-brand-wrapper">
                <img className="footer-brand-img" src={profile}/>
                <h1 className="footer-brand-tittle">BOOKHIVE</h1>
              </div>
              <div className="footer-menu-wrapper">
                <h3>Menu</h3>
                <p>Home</p>
                <p>Library</p>
                <p>Favorite</p>
                <p>Settings</p>
                <p>About</p>
              </div>
              <div className="footer-buku-wrapper">
              <h3>Buku</h3>
                <p>Fiksi</p>
                <p>Non-Fiksi</p>
              </div>
              <div className="footer-kontak-wrapper">
              <h3>Kontak</h3>
                <p>bookhivesupport@gmail.com</p>
                <p>@PUD.Media</p>
              </div>
            </div>
            <div className="footer-btm">
              <div className="line-footer"/>
              <div className="footer-btm-wrapper">
                <p>Version - Early Access</p>
                <p>© 2024 • PUD Media</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
