const Entrada = document.getElementById('libras');

function convertir() {
    const valor = parseInt(Entrada.value);

    if (!isNaN(valor)) {
        let multiplicar = valor * 0.454;
        let aproximar = multiplicar.toFixed(2);
    
    document.getElementById('kilos').innerText = aproximar;
    
    setTimeout(()=> {
        Entrada.value ='';
        document.getElementById('kilos').innerText = '';
    }, 5000)
    } else {
    document.getElementById('kilos').innerText = "Por favor ingrese un numero Valido";
   
    setTimeout(() => {
        Entrada.value = '';
        document.getElementById('kilos').innerText = '';
    }, 5000)
}

}

Entrada.addEventListener('input', convertir)
