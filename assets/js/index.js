const home = document.querySelector(".accueil");
const about = document.querySelector(".about");
const resume = document.querySelector(".resume");
const portfolio = document.querySelector(".portfolio");
const blog = document.querySelector(".blog");
const contact = document.querySelector(".contact");

home = () => {
  home.style.visibility = "visible";
  about.style.visibility = "hidden";
  resume.style.visibility = "hidden";
  portfolio.style.visibility = "hidden";
  blog.style.visibility = "hidden";
  contact.style.visibility = "hidden";
};

about = () => {
  home.style.visibility = "hidden";
  about.style.visibility = "visible";
  resume.style.visibility = "hidden";
  portfolio.style.visibility = "hidden";
  blog.style.visibility = "hidden";
  contact.style.visibility = "hidden";
};

resume = () => {
  home.style.visibility = "hidden";
  about.style.visibility = "hidden";
  resume.style.visibility = "visible";
  portfolio.style.visibility = "hidden";
  blog.style.visibility = "hidden";
  contact.style.visibility = "hidden";
};

portfolio = () => {
  home.style.visibility = "hidden";
  about.style.visibility = "hidden";
  resume.style.visibility = "hidden";
  portfolio.style.visibility = "visible";
  blog.style.visibility = "hidden";
  contact.style.visibility = "hidden";
};

blog = () => {
  home.style.visibility = "hidden";
  about.style.visibility = "hidden";
  resume.style.visibility = "hidden";
  portfolio.style.visibility = "hidden";
  blog.style.visibility = "visible";
  contact.style.visibility = "hidden";
};

contact = () => {
  home.style.visibility = "hidden";
  about.style.visibility = "hidden";
  resume.style.visibility = "hidden";
  portfolio.style.visibility = "hidden";
  blog.style.visibility = "hidden";
  contact.style.visibility = "visible";
};
