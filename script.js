// Ambil elemen navbar dari HTML (yang punya id="navbar")
const navbar = document.getElementById("navbar");

// "scroll" adalah event yang jalan setiap kali user menggeser halaman
window.addEventListener("scroll", () => {
  // window.scrollY = seberapa jauh halaman sudah discroll dari atas (dalam pixel)
  if (window.scrollY > 50) {
    // kalau sudah discroll lebih dari 50px, tambahkan class "scrolled"
    // class ini yang bikin background jadi transparent (lihat style.css)
    navbar.classList.add("scrolled");
  } else {
    // kalau balik ke atas, hapus class-nya lagi (balik putih)
    navbar.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-menu ul");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

revealElements.forEach((el) => observer.observe(el));