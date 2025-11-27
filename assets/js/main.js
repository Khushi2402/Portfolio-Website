// ================== FIREBASE CONFIG ==================
const firebaseConfig = {
  apiKey: "AIzaSyAKsfz9UN5lT7W4MFUSvSvkCFKVrA5ZetA",
  authDomain: "port-2f283.firebaseapp.com",
  databaseURL: "https://port-2f283-default-rtdb.firebaseio.com",
  projectId: "port-2f283",
  storageBucket: "port-2f283.appspot.com",
  messagingSenderId: "657418947528",
  appId: "1:657418947528:web:972abbd3d17d5cff370efd",
  measurementId: "G-J81B8VWFD7",
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, email, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 1000);

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// ================== NAV MENU SHOW/HIDE ==================
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// ================== REMOVE MENU ON LINK CLICK ==================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ================== SCROLL SECTIONS ACTIVE LINK ==================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ================== SCROLL PROGRESS BAR ==================
const progressBar = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
});

// ================== DARK THEME TOGGLE ==================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const THEME_KEY = "kk-portfolio-theme";

const updateThemeIcon = () => {
  const icon = themeToggle.querySelector("i");
  if (body.classList.contains("dark-theme")) {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  } else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  }
};

// Load saved theme
const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme === "dark") {
  body.classList.add("dark-theme");
}
updateThemeIcon(); // Set correct icon on load

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    localStorage.setItem(
      THEME_KEY,
      body.classList.contains("dark-theme") ? "dark" : "light"
    );
    updateThemeIcon(); // Change icon when toggled
  });
}

// ================== SCROLL REVEAL ANIMATION ==================
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  // reset: true
});

sr.reveal(".home__data, .skills__subtitle, .skills__text", {});
sr.reveal(".about__subtitle, .about__text, .skills__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__card, .contact__input", { interval: 200 });
sr.reveal(".skills__chip", { interval: 80 });
sr.reveal(".experience__timeline-item", { origin: "left", interval: 150 });
