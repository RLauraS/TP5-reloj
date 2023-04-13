function obtenerFecha(){
    let fecha = document.querySelector('#fecha');
    let hora = document.querySelector('#hora');
    let fechaActual = new Date();
    fechaActual.getDate(); 
    fechaActual.getDay();
    fechaActual.getMonth();

    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Añadimos la lógica condicional para agregar un cero a la izquierda si la hora, minutos o segundos son menores de 10.
    let horas = fechaActual.getHours() < 10 ? `0${fechaActual.getHours()}` : fechaActual.getHours();
    let minutos = fechaActual.getMinutes() < 10 ? `0${fechaActual.getMinutes()}` : fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds() < 10 ? `0${fechaActual.getSeconds()}` : fechaActual.getSeconds();

    fecha.innerHTML = `${diasDeLaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;

    // Concatenamos la hora, minutos y segundos con el formato "hh:mm:ss AM/PM"
    hora.innerHTML = `${horas}:${minutos}:${segundos} ${fechaActual.getHours() < 12 ? 'AM' : 'PM'}`;
}

setInterval(obtenerFecha, 1000);
