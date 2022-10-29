let img = document.getElementById("img");
let lg = document.getElementById("lg");
let titleHoverIn = document.getElementById("titleHoverIn");
let paraHoverIn = document.getElementById("paraHoverIn");
let svg1HoverIn = document.getElementById("svg1HoverIn");
let svg2HoverIn = document.getElementById("svg2HoverIn");
let svg3HoverIn = document.getElementById("svg3HoverIn");

function hoverIn() {
  img.style.transform = "scale(1.2)";
  lg.classList.toggle("lgHover");
  lg.classList.remove("lgHoverOut");

  titleHoverIn.classList.add("titleHoverIn");
  paraHoverIn.classList.add("paraHoverIn");
  svg1HoverIn.classList.add("svg1HoverIn");
  svg2HoverIn.classList.add("svg2HoverIn");
  svg3HoverIn.classList.add("svg3HoverIn");
}

function hoverOut() {
  img.style.transform = "scale(1)";
  lg.classList.remove("lgHover");
  lg.classList.add("lgHoverOut");

  titleHoverIn.classList.remove("titleHoverIn");
  paraHoverIn.classList.remove("paraHoverIn");
  svg1HoverIn.classList.remove("svg1HoverIn");
  svg2HoverIn.classList.remove("svg2HoverIn");
  svg3HoverIn.classList.remove("svg3HoverIn");
}
