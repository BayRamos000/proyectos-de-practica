function multiplicar() {
    let numero1 = parseFloat(document.getElementById("factura").value);
    let numero2 = parseFloat(document.getElementById("propina").value);
    let porcentaje = numero2 / 100;
    let propina = numero1 * porcentaje;
    let total = propina + numero1; 
    document.getElementById("total").innerHTML = total.toFixed(2);
}