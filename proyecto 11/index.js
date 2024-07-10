const celsiu = document.getElementById("celsius");
const fareniet = document.getElementById("fahrenheit");
const dockelvin = document.getElementById("kelvin");

function entradaCelsius (){
    const celsius = parseFloat(celsiu.value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    fareniet.value = fahrenheit.toFixed(2);
    dockelvin.value = kelvin.toFixed(2);

    setTimeout(() => {
        celsiu.value = "";
        fareniet.value = "";
        dockelvin.value = "";
    }, 8000)
}

celsiu.addEventListener("input", () => {
    entradaCelsius();
})



function entradaFahrenheit (){
    const fahrenheit = parseFloat(fareniet.value);
    let celsius = ((fahrenheit - 32) * 5)/9;
    let kelvin = (((fahrenheit - 32) * 5)/9)+273.15;
    celsiu.value = celsius.toFixed(2);
    dockelvin.value = kelvin.toFixed(2);
    
    setTimeout(() => {
        fareniet.value = "";
        celsiu.value = "";
        dockelvin.value = "";
    }, 8000)
}

fareniet.addEventListener("input", () =>{
    entradaFahrenheit();
})

function entradaKelvin (){
    const kelvin = parseFloat(dockelvin.value);
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    celsiu.value = celsius.toFixed(2);
    fareniet.value = fahrenheit.toFixed(2);

    setTimeout(() => {
        dockelvin.value = "";
        fareniet.value = "";
        celsiu.value = "";
    }, 8000)
}

dockelvin.addEventListener("input", () => {
    entradaKelvin();
})

