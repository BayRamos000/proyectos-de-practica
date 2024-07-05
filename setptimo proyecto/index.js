const tiempoEl = document.getElementById("tiempo");
    const botonInicio = document.getElementById("inicio");
    const botonPausa = document.getElementById("pausa");
    const botonReinicio = document.getElementById("reinicio");

    let iniciarTemporizador = 0
    let tiempoTranscurido = 0 
    let Interval;

    const actualizar = () => {
        const ahora = Date.now();
        tiempoTranscurido = ahora - iniciarTemporizador
        tiempoEl.textContent = formatearTiempo(tiempoTranscurido);
    };

    const comenzar = () => {
        iniciarTemporizador = Date.now() - tiempoTranscurido;
        Interval = setInterval(actualizar, 10);
        botonInicio.disabled = true;
        botonPausa.disabled = false;
        botonReinicio.disabled = false;
    };

    const pausar = () => {
        clearInterval(Interval);
        botonInicio.disabled = false;
        botonPausa.disabled = true;
    };

    const resetiar = () => {
        clearInterval(Interval);
        tiempoTranscurido = 0;
        tiempoEl.textContent = "00:00:00.00";
        botonInicio.disabled = false;
        botonPausa.disabled = true;
        botonReinicio.disabled = true;
    };

    const formatearTiempo = (tiempoTranscurido) => {
        const miliSegundos = Math.floor((tiempoTranscurido % 1000) / 10);
        const segundos = Math.floor((tiempoTranscurido / 1000) % 60);
        const minutos = Math.floor((tiempoTranscurido / (1000 * 60)) % 60);
        const horas = Math.floor(tiempoTranscurido / (1000 * 60 * 60));
        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}.${miliSegundos.toString().padStart(2, '0')}`;
    };
