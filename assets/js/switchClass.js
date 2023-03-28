const switchClass = document.getElementById("text");

const columna = document.getElementById("col");

columna.addEventListener("mouseover", function () {
  if (e.target === "mouseover") {
    switchClass.classList.add("show");
  } else {
    switchClass.classList.remove("show");
  }
});
