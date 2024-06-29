const dado = document.getElementById("dado");
const historial = document.getElementById("historial");

let historia = [];

function tirarDado (){
    const resultado = Math.floor(Math.random()*6)+1;
    const caraDado = consegirCaraDado(resultado);
    dado.innerHTML = caraDado;
    historia.push(resultado);
    actualizarHistoria();
}

function consegirCaraDado(resultado) {
    switch (resultado) {
      case 1:
        return "&#9856;";
      case 2:
        return "&#9857;";
      case 3:
        return "&#9858;";
      case 4:
        return "&#9859;";
      case 5:
        return "&#9860;";
      case 6:
        return "&#9861;";
      default:
        return "";
    }
  }

  function actualizarHistoria() {
    historial.innerHTML = "";
    for (let i = 0; i < historia.length; i++) {
        const nuevo = document.createElement("li");
        nuevo.innerHTML = `tirada ${i + 1}: <span> ${consegirCaraDado(historia[i])}</span>`
        historial.appendChild(nuevo);
    }
  }


