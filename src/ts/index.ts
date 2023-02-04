import "../styles/index.css";
import "./TypeScript-caca.js";
import * as urls from "./TypeScript-caca.js";
const img1 = document.querySelector(".img1") as HTMLImageElement;
const img2 = document.querySelector(".img2") as HTMLImageElement;
const img3 = document.querySelector(".img3") as HTMLImageElement;
const img5 = document.querySelector(".img5") as HTMLImageElement;
const img6 = document.querySelector(".img6") as HTMLImageElement;
img1.src = urls.urlChior;
img2.src = urls.urlCiocan;
img3.src = urls.urlMort;
img5.src = urls.urltepos;
img6.src = urls.urlunghiuta;

// Pop up
const grid = document.querySelector(".click-me");
const POP = document.querySelector(".POP") as HTMLElement;
const titlePOP = document.querySelector(".POP h2") as HTMLElement;
const paraPOP = document.querySelector(".POP p");
const imgPOP = document.querySelector(".POP img") as HTMLImageElement;
const wrapPOP = document.querySelector(".wrap");
const charac = [
  {},
  {
    title: "Satoru Gojo",
    descp:
      "Satoru Gojo is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world.",
    url: urls.urlgojoPOP,
  },
  {
    title: "Denji",
    descp:
      "Denji is the titular protagonist of the Chainsaw Man manga and anime series, and the main protagonist of the Public Safety Saga.",
    url: urls.urldenjiPOP,
  },
  {
    title: "Power",
    descp:
      "Power was a Blood Fiend and a Public Safety Devil Hunter who is part of Makima's special squad.",
    url: urls.urlpowerPOP,
  },
  {},
  {},
  {},
];
grid.addEventListener("click", (e) => {
  console.log(e.target);
  const element = e.target as HTMLElement;
  if (element.tagName === "IMG") {
    // Pop up info
    const order = element.classList[0][3] as unknown;
    titlePOP.textContent = charac[order as number].title;
    paraPOP.textContent = charac[order as number].descp;
    imgPOP.src = charac[order as number].url;

    // Pop up open
    console.log(POP.classList);
    POP.classList.remove("scale-0");
    wrapPOP.classList.add("opacity-[85%]");
    wrapPOP.classList.remove("pointer-events-none");

    // Pop up close
    wrapPOP.addEventListener("click", (e) => {
      POP.classList.add("scale-0");
      wrapPOP.classList.remove("opacity-[85%]");
      wrapPOP.classList.add("pointer-events-none");
    });
  }
});
