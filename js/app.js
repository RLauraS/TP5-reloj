function obtenerFecha(){
    let fecha = document.querySelector('#fecha');
    let hora = document.querySelector('#hora');
    let fechaActual = new Date();
    fechaActual.getDate(); //devuelve la fecha (nro de día del mes)
    fechaActual.getDay();// devuelve el nro del día de la semana 0 es domingo, 1 lunes...
    fechaActual.getMonth();//devuelve nro de mes, 0 es enero, diciembre sería 11
    
    // Array de días de la semana
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    // Array de meses
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    hora.innerHTML=`${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`
}
setInterval(obtenerFecha,1000);