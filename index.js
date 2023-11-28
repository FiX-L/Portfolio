const card = document.querySelector(".box");
const btnAPropos = document.querySelector(".btn1");
const btnCompetences = document.querySelector(".btn2");
const btnProjets = document.querySelector(".btn3");
const aPropos = document.querySelector(".aPropos");
const competences = document.querySelector(".competences");
const projets = document.querySelector(".projets");
const tousProjets = document.querySelector(".tousProjets");
const font = document.querySelector(".content");
const positionScrolling = document.querySelector(".position-scrolling");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

btnAPropos.addEventListener("click", () => {
  aPropos.classList.toggle("active");
  competences.classList.remove("active");
  projets.classList.remove("active");
  positionScrolling.classList.remove("active");
  fontChoix.classList.remove("active");
  nav.classList.remove("active");
  logoIn.classList.remove("active");
});

btnCompetences.addEventListener("click", () => {
  competences.classList.toggle("active");
  aPropos.classList.remove("active");
  projets.classList.remove("active");
  positionScrolling.classList.remove("active");
  fontChoix.classList.remove("active");
  nav.classList.remove("active");
  logoIn.classList.remove("active");
});

btnProjets.addEventListener("click", () => {
  projets.classList.toggle("active");
  competences.classList.remove("active");
  positionScrolling.classList.toggle("active");
  fontChoix.classList.remove("active");
  nav.classList.remove("active");
  logoIn.classList.remove("active");
});

font.addEventListener("click", () => {
  aPropos.classList.remove("active");
  competences.classList.remove("active");
  projets.classList.remove("active");
  positionScrolling.classList.remove("active");
  nav.classList.remove("active");
  logoIn.classList.remove("active");
});
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / -25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
card.addEventListener("mouseenter", () => {
  card.style.transition = "none";
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  card.style.transition = "all 0.5s ease";
});

window.addEventListener("mousemove", (e) => {
  card.style.setProperty("--x", e.layerX + "px");
  card.style.setProperty("--y", e.layerY + "px");
});

tousProjets.addEventListener("scroll", () => {
  if (tousProjets.scrollTop > 260) {
    p2.style.backgroundColor = "#5effea";
    p1.style.backgroundColor = "transparent";
  } else {
    p1.style.backgroundColor = "#5effea";
    p2.style.backgroundColor = "transparent";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1230) {
    p1.style.backgroundColor = "#5effea";
    p2.style.backgroundColor = "#5effea";
  } else {
    p1.style.backgroundColor = "";
    p2.style.backgroundColor = "";
  }
});

p1.addEventListener("click", () => {
  if (window.innerWidth <= 1230) {
    p1.style.backgroundColor = "#5effea";
    p2.style.backgroundColor = "transparent";
    tousProjets.scrollTop = 0;
  } else {
    p1.style.backgroundColor = "#5effea";
    p2.style.backgroundColor = "#5effea";
  }
});
p2.addEventListener("click", () => {
  if (window.innerWidth <= 1230) {
    p2.style.backgroundColor = "#5effea";
    p1.style.backgroundColor = "transparent";
    tousProjets.scrollTop = 520;
  } else {
    p1.style.backgroundColor = "#5effea";
    p2.style.backgroundColor = "#5effea";
  }
});

const bouton = document.querySelector(".croix-toggle");
const nav = document.querySelector(".liste");
const logoIn = document.querySelector(".logoIn");
const fontChoix = document.querySelector(".font-choix");

bouton.addEventListener("click", () => {
  nav.classList.toggle("active");
  logoIn.classList.toggle("active");
  fontChoix.classList.toggle("active");
  aPropos.classList.remove("active");
  competences.classList.remove("active");
  projets.classList.remove("active");
  positionScrolling.classList.remove("active");
});
fontChoix.addEventListener("click", () => {
  nav.classList.remove("active");
  logoIn.classList.remove("active");
  fontChoix.classList.remove("active");
});
