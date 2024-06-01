//Home.jsx

import React, { useState, useEffect } from "react";

import "../App.css";
import "../component/footer.css";
import "../component/BreakPoint.css";
import profile from "../icon/account.svg";
import notificon from "../icon/notifications.svg";
import RecomendCard from "../component/RecomendCard";
import dilanimg from "../img/dilanposter.jpg";
import BookCardMini from "../component/BookCardMini";
import ComingSoonCard from "../component/ComingSoonCard";
import NotificationCard from "../component/NotificationCard";
import InfoBook from "../component/InfoBook";
import logo from "../img/logo192.png";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const [selectedBook, setSelectedBook] = useState(null);
  const [recomendData, setRecomendData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [istogglenotif, settogglenotif] = useState(false);
  const [isclick, setclick] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allBooks = [];

        // Generate random page number
        const getRandomPage = () => Math.floor(Math.random() * 10000) + 1;
        const randomPage = getRandomPage();

        // Fetch data from the random page
        const response = await axios.get(
          `https://gnikdroy.pythonanywhere.com/api/book/?page=${randomPage}`
        );
        allBooks = response.data.results;

        const parsedData = allBooks.map((item) => {
          const { title, agents, resources, downloads } = item;
          const name = agents.length > 0 ? agents[0].person : "Unknown";
          const imgResource = resources.find(
            (resource) => resource.type === "image/jpeg"
          );
          const src = imgResource ? imgResource.uri : "";
          const htmlResource = resources.find(
            (resource) => resource.type.includes("text/html")
          );
          const htmlLink = htmlResource ? htmlResource.uri : "#";

          return {
            title,
            name,
            date: "-", // No date provided, default to "-"
            src,
            downloads,
            description: item.description,
            htmlLink,
          };
        });

        // Randomize and limit to 10 items
        const shuffledData = parsedData
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
        setRecomendData(shuffledData);

        const booksl = parsedData.slice(0, 8);
        setSearchData(booksl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allBooks = [];

        // Generate random page number
        const getRandomPage = () => Math.floor(Math.random() * 10000) + 1;
        const randomPage = getRandomPage();

        // Fetch data from the random page
        const response = await axios.get(
          `https://gnikdroy.pythonanywhere.com/api/book/?page=1`
        );
        allBooks = response.data.results;

        const parsedData = allBooks.map((item) => {
          const { title, agents, resources, downloads } = item;
          const name = agents.length > 0 ? agents[0].person : "Unknown";
          const imgResource = resources.find(
            (resource) => resource.type === "image/jpeg"
          );
          const src = imgResource ? imgResource.uri : "";
          const htmlResource = resources.find(
            (resource) => resource.type.includes("text/html")
          );
          const htmlLink = htmlResource ? htmlResource.uri : "#";

          return {
            title,
            name,
            date: "-", // No date provided, default to "-"
            src,
            downloads,
            description: item.description,
            htmlLink,
          };
        });

        const booksl = parsedData.slice(0, 8);
        setSearchData(booksl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const notifToggle = () => {
    settogglenotif(!istogglenotif);
  };

  const recomendCardClick = (book) => {
    setclick(!isclick);
    setSelectedBook(book);
  };

  const navigatelogin = () => {
    navigate("/Login");
  };

  const navigateLibrary = () => {
    navigate("/Library");
  };

  const openLinkRead = () => {
    window.open(selectedBook.htmlLink, "_blank", "noreferrer");
  }

  return (
    <div className="Home">
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
              <img className="logo" src={logo}></img>
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
              <img
                className="profile"
                src={profile}
                onClick={navigatelogin}
              ></img>
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
            <button className="jelajahi-btn" onClick={navigateLibrary}>
              Jelajahi
            </button>
          </div>
        </div>
      </header>
      <body>
        <div
          className={
            isclick
              ? "container-body container-body-infobook-on"
              : "container-body container-body-infobook-off"
          }
        >
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
                  onClick={() => recomendCardClick(item)}
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
                {searchData.map((item, index) => (
                  <BookCardMini
                    tittle={item.title}
                    name={item.name}
                    date={"-"}
                    src={item.src}
                  />
                ))}
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
        <div
          className={
            isclick
              ? "infobook-container infobook-visible"
              : "infobook-container infobook-hidden"
          }
        >
          <div>
            {selectedBook ? (
              <InfoBook
                onClick={recomendCardClick}
                tittleBook={selectedBook.title}
                imgbook={selectedBook.src}
                pnd={`${selectedBook.name} • ${selectedBook.date}`}
                page="160"
                seen={selectedBook.downloads}
                desc={selectedBook.description}
                onClickLink={openLinkRead}
              />
            ) : (
              <InfoBook
                onClick={recomendCardClick}
                titleBook={"notfound"}
                imgBook={"notfound"}
                pnd={"notfound"}
                page={"notfound"}
                seen={"notfound"}
                desc={"notfound"}
              />
            )}
          </div>
        </div>
      </body>
      <footer>
        <div className="footer-container">
          <div className="footer-grid-container">
            <div className="footer-top">
              <div className="footer-brand-wrapper">
                <img className="footer-brand-img" src={logo} />
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
    </div>
  );
}

export default Home;
