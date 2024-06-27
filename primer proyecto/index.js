const frases = [
    {
        nombre: "Bayron",
        foto: 
            "https://th.bing.com/th/id/OIP.eVIR2_AqI3PhTKheuV27DQHaE7?rs=1&pid=ImgDetMain",
        texto: "Tu vida es tu historia y la aventura que tienes por delante es el viaje para cumplir tu propio propósito y potencial No te detengas ante los obstáculos conviértelos en escalones hacia tus sueños La perseverancia y la determinación te llevarán a lugares que nunca imaginaste alcanzar"
    },
    {
        nombre: "Alberto",
        foto: 
            "https://mentenews.com/wp-content/uploads/2023/04/nossa-compreensao-do-que-vemos-no-universo-pode-estar-errada-1675635379657_1280.jpg",
        texto: "El universo es vasto y lleno de misterios pero quiero que sepas que en medio de su inmensidad, siempre hay espacio para la esperanza y la felicidad  Este gatito te envía su amor desde las estrellas recordándote que siempre hay algo bonito esperando a ser descubierto"
    },
    {
        nombre: "Arturo",
        foto: 
            "https://th.bing.com/th/id/R.4abdf8a6a16b5f648a65e86e4cc14417?rik=s5sMKUF2lJ0COA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-nb5OgFiKofs%2fUvpc-recxLI%2fAAAAAAAA8Xo%2fw-UnSmSAvgI%2fs00%2fPaisaje-de-Invierno-en-HD-1920x1080.jpg&ehk=8oLQ2FQJaYVvAmDrIGlnGKCRvMacZvYkWA8JrqARtHI%3d&risl=&pid=ImgRaw&r=0",
        texto: "A veces la vida puede sentirse como una ecuación complicada pero recuerda que siempre hay soluciones y caminos para resolverla Este gatito te envía su ternura para recordarte que al igual que en las matemáticas siempre hay una respuesta que traerá equilibrio y paz a tu día"
    }
]


const nombrE = document.getElementById("nombre");
const imG = document.getElementById("img");
const textO = document.getElementById("texto")



let inicio = 0;

mostrarTarjeta()

function mostrarTarjeta() {
    const { nombre, foto, texto} = frases[inicio]
    imG.src = foto;
    textO.innerText = texto;
    nombrE.innerText = nombre;
    inicio++;

    if (inicio === frases.length) {
        inicio = 0;
    }
}

setInterval(mostrarTarjeta, 3000);
