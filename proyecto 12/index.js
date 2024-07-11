const DocBarra = document.querySelector(".barra");
const DocContenido = document.getElementById("contenido");

console.log(DocBarra.offsetHeight);
console.log(DocContenido.offsetTop);

window.addEventListener("scroll", () => {
    if (
      window.scrollY >
      DocContenido.offsetTop - DocBarra.offsetHeight - 50
    ) {
      DocBarra.classList.add("active");
    } else {
      DocBarra.classList.remove("active");
    }
  });