import "./AboutStyle.css";
function About(params) {
  return (
    <div className="About">
      <div className="about-container">
        <h1>Tentang Book Hive</h1>
        <p className="about-first-p">
          BookHive adalah perpustakaan digital yang dirancang untuk membuka
          dunia pengetahuan bagi semua orang. Kami menawarkan koleksi buku
          digital yang luas dalam berbagai genre, format, dan bahasa, yang dapat
          diakses kapan saja dan di mana saja.
        </p>
        <br />
        <p className="mengapa-txt">Mengapa BookHive?</p>
        <ul>
          <li>
            Koleksi yang Luas: Kami menawarkan jutaan buku digital dalam
            berbagai genre, format, dan bahasa. Anda dapat menemukan apa pun
            yang Anda cari, mulai dari fiksi populer hingga non-fiksi
            informatif, buku anak-anak hingga buku teks akademik.
          </li>
          <li>
            Akses Mudah: Anda dapat mengakses BookHive dari perangkat apa pun,
            di mana pun Anda berada. Cukup login dengan akun Anda dan mulailah
            membaca.
          </li>
          <li>
            Fitur Canggih: Kami menawarkan berbagai fitur canggih untuk
            meningkatkan pengalaman membaca Anda, seperti bookmark/favorite.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
