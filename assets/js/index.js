const homeIcon = document.getElementById("home-icon");
const aboutIcon = document.getElementById("about-icon");
const resumeIcon = document.getElementById("resume-icon");
const portfolioIcon = document.getElementById("portfolio-icon");
const blogIcon = document.getElementById("blog-icon");
const contactIcon = document.getElementById("contact-icon");
const buttonServices = document.getElementById("button-services");

const pagesContainer = document.querySelector(".pages");
const homeSection = document.querySelector(".accueil");
const aboutSection = document.querySelector(".about");
const resumeSection = document.querySelector(".resume");
const portfolioSection = document.querySelector(".portfolio");
const blogSection = document.querySelector(".blog");
const contactSection = document.querySelector(".contact");

homeIcon.addEventListener(
  "click",
  (homeAffiche = () => {
    homeSection.style.display = "flex";
    aboutSection.style.display = "none";
    resumeSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    contactSection.style.display = "none";
  })
);

aboutIcon.addEventListener(
  "click",
  (aboutAffiche = () => {
    homeSection.style.display = "none";
    aboutSection.style.display = "block";
    resumeSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    contactSection.style.display = "none";
  })
);

resumeIcon.addEventListener(
  "click",
  (resumeAffiche = () => {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    resumeSection.style.display = "block";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    contactSection.style.display = "none";
  })
);

portfolioIcon.addEventListener(
  "click",
  (portfolioAffiche = () => {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    resumeSection.style.display = "none";
    portfolioSection.style.display = "block";
    blogSection.style.display = "none";
    contactSection.style.display = "none";
  })
);

blogIcon.addEventListener(
  "click",
  (blogAffiche = () => {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    resumeSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "block";
    contactSection.style.display = "none";
  })
);

contactIcon.addEventListener(
  "click",
  (blogAffiche = () => {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    resumeSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    contactSection.style.display = "block";
  })
);

buttonServices.addEventListener(
  "click",
  (resumeAffiche = () => {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    resumeSection.style.display = "block";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    contactSection.style.display = "none";
  })
);
