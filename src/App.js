import React, { useState, useEffect } from "react";
import "./App.css";
import "./component/footer.css";
import "./component/BreakPoint.css";
import "./component/NavbarStyle.css";
import profile from "./icon/logo.svg";
import notificon from "./icon/notifications.svg";
import RecomendCard from "./component/RecomendCard";
import dilanimg from "./img/dilanposter.jpg";
import BookCardMini from "./component/BookCardMini";
import ComingSoonCard from "./component/ComingSoonCard";
import Navbar from "./component/Navbar";
import NotificationCard from "./component/NotificationCard";
import InfoBook from "./component/InfoBook";

function App() {
  const [istogglenotif, settogglenotif] = useState(false);
  const notifToggle = () => {
    settogglenotif(!istogglenotif);
  };

  const [isclick, setclick] = useState(false);
  const recomendCardClick = () => {
    setclick(!isclick);
  };


  const recomendData = [
    { title: "Mahluk Mars", name: "Steve", date: "2020", src: dilanimg },
    { title: "Planet Earth", name: "John", date: "2021", src: dilanimg },
    { title: "Alien Invasion", name: "Alice", date: "2019", src: dilanimg },
    { title: "Galactic War", name: "Bob", date: "2018", src: dilanimg },
    { title: "Space Journey", name: "Charlie", date: "2017", src: dilanimg },
    { title: "Astronaut Life", name: "Dave", date: "2016", src: dilanimg },
    { title: "Black Hole", name: "Eve", date: "2015", src: dilanimg },
    { title: "Comet Arrival", name: "Frank", date: "2014", src: dilanimg },
    { title: "Star Light", name: "Grace", date: "2013", src: dilanimg },
    { title: "Moon Landing", name: "Hank", date: "2012", src: dilanimg },
  ];

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="top-header">
            <div
              className={
                istogglenotif
                  ? "top-left top-left-notif-visible"
                  : "top-left top-left-notif-hidden"
              }
            >
              <img className="logo" src={profile}></img>
              <h3 className="brandname">BookHive</h3>
            </div>
            <div
              className={
                istogglenotif
                  ? "top-right top-right-collapse"
                  : "top-right top-right-uncollapse"
              }
            >
              <img
                className="notification"
                src={notificon}
                onClick={notifToggle}
              ></img>
              <img className="profile" src={profile}></img>
              <div
                className={
                  istogglenotif
                    ? "notification-container notification-visible"
                    : "notification-container notification-hidden"
                }
              >
                <NotificationCard
                  notifImg={profile}
                  notifName={"Book Hive"}
                  notifTime={"46 dtk yang lalu"}
                  txtNotifMsg={
                    "Waduhh.. kayanya kamu belum punya akun di BookHive nih, buat akun dulu yukk. supaya kamu bisa menyimpan buku-buku favorite kamu disini."
                  }
                />
                <NotificationCard
                  notifImg={profile}
                  notifName={"Book Hive"}
                  notifTime={"3 mnt yang lalu"}
                  txtNotifMsg={"Selamat Datang di Perpustakan BookHive :)"}
                />
                <NotificationCard
                  notifImg={profile}
                  notifName={"Dummy"}
                  notifTime={"4 mnt yang lalu"}
                  txtNotifMsg={"Selamat Datang di Perpustakan BookHive :)"}
                />
                <NotificationCard
                  notifImg={profile}
                  notifName={"Dummy"}
                  notifTime={"7 mnt yang lalu"}
                  txtNotifMsg={
                    "Waduhh.. kayanya kamu belum punya akun di BookHive nih, buat akun dulu yukk. supaya kamu bisa menyimpan buku-buku favorite kamu disini."
                  }
                />
              </div>
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
        <div className={isclick ? "container-body container-body-infobook-on" : "container-body container-body-infobook-off"}>
          <div className="recomend-layout">
            <div className="recomend-tittle">
              <h3>Rekomendasi Untuk Anda</h3>
            </div>
            <div className="recomend-scroll">
              {recomendData.map((item, index) => (
                <RecomendCard
                  key={index}
                  tittle={item.title}
                  name={item.name}
                  date={item.date}
                  src={item.src}
                  onClick={recomendCardClick}
                />
              ))}
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
                  <ComingSoonCard img={dilanimg} tittle={"Pergi Jauh"} />
                  <ComingSoonCard img={dilanimg} tittle={"Yang Lalu"} />
                  <ComingSoonCard img={dilanimg} tittle={"Pemograman Basic"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isclick ? "infobook-container infobook-visible" : "infobook-container infobook-hidden"}>
          <InfoBook
          onClick={recomendCardClick}
            tittleBook={"Dilan"}
            imgbook={dilanimg}
            pnd={"Pidi Baiq" + "•" + "2016"}
            page={"160"}
            seen={"0"}
            desc={
              "Cinta, walaupun sudah berlalu sekian lama, tetap saja, saat dikenang begitu manis. Milea, dia kembali ke tahun 1990 untuk menceritakan seorang laki-laki yang pernah menjadi seseorang yang sangat dicintainya, Dilan."
            }
          />
        </div>
      </body>
      <footer>
        <div className="footer-container">
          <div className="footer-grid-container">
            <div className="footer-top">
              <div className="footer-brand-wrapper">
                <img className="footer-brand-img" src={profile} />
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
              <div className="line-footer" />
              <div className="footer-btm-wrapper">
                <p>Version - Early Access</p>
                <p>© 2024 • PUD Media</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Navbar />
    </div>
  );
}

export default App;
