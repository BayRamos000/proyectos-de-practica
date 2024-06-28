const nacimiento = document.getElementById("cumpleaños");
const edadActual = document.getElementById("año");

function calcular() {
    const fechaNaci = nacimiento.value;
    if (fechaNaci === "") {
      alert("por favor ingresa tu fecha de nacimiento");
    } else {
      const obtenerEdad = consegirAños(fechaNaci);
      edadActual.innerText = `tienes ${obtenerEdad} ${obtenerEdad > 1 ? "años" : ""} `;
    }
  }
  
  function consegirAños(fechaNaci) {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(fechaNaci);
    let obtenerEdad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
  
    if (
      mes < 0 ||
      (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
      obtenerEdad--;
    }
  
    return obtenerEdad;
  }
  