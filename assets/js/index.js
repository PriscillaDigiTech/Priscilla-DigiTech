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
const bulle = document.querySelector(".bulle");
const homeBulle = document.querySelector(".homeBulle");
const aboutBulle = document.querySelector(".aboutBulle");
const resumeBulle = document.querySelector(".resumeBulle");
const portfolioBulle = document.querySelector(".portfolioBulle");
const blogBulle = document.querySelector(".blogBulle");
const contactBulle = document.querySelector(".contactBulle");

homeIcon.addEventListener(
  "click",
  (homeAffiche = () => {
    homeSection.style.display = "flex";
    aboutSection.style.display = "none";
    resumeSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    contactSection.style.display = "none";
    homeIcon.style.color = "#fa255e";
    aboutIcon.style.color = "#888888";
    resumeIcon.style.color = "#888888";
    portfolioIcon.style.color = "#888888";
    blogIcon.style.color = "#888888";
    contactIcon.style.color = "#888888";
    homeBulle.style.background = "#fa255e";
    aboutBulle.style.background = "white";
    resumeBulle.style.background = "white";
    portfolioBulle.style.background = "white";
    blogBulle.style.background = "white";
    contactBulle.style.background = "white";
    homeBulle.style.color = "white";
    aboutBulle.style.color = "#888888";
    resumeBulle.style.color = "#888888";
    portfolioBulle.style.color = "#888888";
    blogBulle.style.color = "#888888";
    contactBulle.style.color = "#888888";
    homeBulle.style.border = "1px solid #fa255e";
    aboutBulle.style.border = "1px solid #888888";
    resumeBulle.style.border = "1px solid #888888";
    portfolioBulle.style.border = "1px solid #888888";
    blogBulle.style.border = "1px solid #888888";
    contactBulle.style.border = "1px solid #888888";
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
    homeIcon.style.color = "#888888";
    aboutIcon.style.color = "#fa255e";
    resumeIcon.style.color = "#888888";
    portfolioIcon.style.color = "#888888";
    blogIcon.style.color = "#888888";
    contactIcon.style.color = "#888888";
    homeBulle.style.background = "white";
    aboutBulle.style.background = "#fa255e";
    resumeBulle.style.background = "white";
    portfolioBulle.style.background = "white";
    blogBulle.style.background = "white";
    contactBulle.style.background = "white";
    homeBulle.style.color = "#888888";
    aboutBulle.style.color = "white";
    resumeBulle.style.color = "#888888";
    portfolioBulle.style.color = "#888888";
    blogBulle.style.color = "#888888";
    contactBulle.style.color = "#888888";
    homeBulle.style.border = "1px solid #888888";
    aboutBulle.style.border = "1px solid #fa255e";
    resumeBulle.style.border = "1px solid #888888";
    portfolioBulle.style.border = "1px solid #888888";
    blogBulle.style.border = "1px solid #888888";
    contactBulle.style.border = "1px solid #888888";
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
    homeIcon.style.color = "#888888";
    aboutIcon.style.color = "#888888";
    resumeIcon.style.color = "#fa255e";
    portfolioIcon.style.color = "#888888";
    blogIcon.style.color = "#888888";
    contactIcon.style.color = "#888888";

    homeBulle.style.background = "white";
    aboutBulle.style.background = "white";
    resumeBulle.style.background = "#fa255e";
    portfolioBulle.style.background = "white";
    blogBulle.style.background = "white";
    contactBulle.style.background = "white";
    homeBulle.style.color = "#888888";
    aboutBulle.style.color = "#888888";
    resumeBulle.style.color = "white";
    portfolioBulle.style.color = "#888888";
    blogBulle.style.color = "#888888";
    contactBulle.style.color = "#888888";
    homeBulle.style.border = "1px solid #888888";
    aboutBulle.style.border = "1px solid #888888";
    resumeBulle.style.border = "1px solid #fa255e";
    portfolioBulle.style.border = "1px solid #888888";
    blogBulle.style.border = "1px solid #888888";
    contactBulle.style.border = "1px solid #888888";
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
    homeIcon.style.color = "#888888";
    aboutIcon.style.color = "#888888";
    resumeIcon.style.color = "#888888";
    portfolioIcon.style.color = "#fa255e";
    blogIcon.style.color = "#888888";
    contactIcon.style.color = "#888888";

    homeBulle.style.background = "white";
    aboutBulle.style.background = "white";
    resumeBulle.style.background = "white";
    portfolioBulle.style.background = "#fa255e";
    blogBulle.style.background = "white";
    contactBulle.style.background = "white";
    homeBulle.style.color = "#888888";
    aboutBulle.style.color = "#888888";
    resumeBulle.style.color = "#888888";
    portfolioBulle.style.color = "white";
    blogBulle.style.color = "#888888";
    contactBulle.style.color = "#888888";
    homeBulle.style.border = "1px solid #888888";
    aboutBulle.style.border = "1px solid #888888";
    resumeBulle.style.border = "1px solid #888888";
    portfolioBulle.style.border = "1px solid #fa255e";
    blogBulle.style.border = "1px solid #888888";
    contactBulle.style.border = "1px solid #888888";
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
    homeIcon.style.color = "#888888";
    aboutIcon.style.color = "#888888";
    resumeIcon.style.color = "#888888";
    portfolioIcon.style.color = "#888888";
    blogIcon.style.color = "#fa255e";
    contactIcon.style.color = "#888888";

    homeBulle.style.background = "white";
    aboutBulle.style.background = "white";
    resumeBulle.style.background = "white";
    portfolioBulle.style.background = "white";
    blogBulle.style.background = "#fa255e";
    contactBulle.style.background = "white";
    homeBulle.style.color = "#888888";
    aboutBulle.style.color = "#888888";
    resumeBulle.style.color = "#888888";
    portfolioBulle.style.color = "#888888";
    blogBulle.style.color = "white";
    contactBulle.style.color = "#888888";
    homeBulle.style.border = "1px solid #888888";
    aboutBulle.style.border = "1px solid #888888";
    resumeBulle.style.border = "1px solid #888888";
    portfolioBulle.style.border = "1px solid #888888";
    blogBulle.style.border = "1px solid #fa255e";
    contactBulle.style.border = "1px solid #888888";
  })
);

contactIcon.addEventListener(
  "click",
  (contactAffiche = () => {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    resumeSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    contactSection.style.display = "block";
    homeIcon.style.color = "#888888";
    aboutIcon.style.color = "#888888";
    resumeIcon.style.color = "#888888";
    portfolioIcon.style.color = "#888888";
    blogIcon.style.color = "#888888";
    contactIcon.style.color = "#fa255e";

    homeBulle.style.background = "white";
    aboutBulle.style.background = "white";
    resumeBulle.style.background = "white";
    portfolioBulle.style.background = "white";
    blogBulle.style.background = "white";
    contactBulle.style.background = "#fa255e";
    homeBulle.style.color = "#888888";
    aboutBulle.style.color = "#888888";
    resumeBulle.style.color = "#888888";
    portfolioBulle.style.color = "#888888";
    blogBulle.style.color = "#888888";
    contactBulle.style.color = "white";
    homeBulle.style.border = "1px solid #888888";
    aboutBulle.style.border = "1px solid #888888";
    resumeBulle.style.border = "1px solid #888888";
    portfolioBulle.style.border = "1px solid #888888";
    blogBulle.style.border = "1px solid #888888";
    contactBulle.style.border = "1px solid #fa255e";
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
    homeIcon.style.color = "#888888";
    resumeIcon.style.color = "#fa255e";
  })
);
