//- ::: Functions Strings :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -//


// Retorna la ruta URL Actual

const dirUrl = () => {

    const location = window.location.pathname;
    const direction = location.substring(0, location.lastIndexOf('/'))

    return direction

}



//- Mayúscula al primer carácter -//
const capitalize = ( string ) => {

    return string.charAt(0).toUpperCase() + string.slice(1);

};


//- Convierte un String en url -//
const url = ( string ) => {

    return string.replace(' / ', '-').replace('.', '').replace(/[, ]+/g, ' ').replace('/', '-').split(' ').join('-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');

};



//- ::: Functions Date :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -//

//- Función de flecha, limitada y no se puede utilizar en todas las situaciones - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//- Imprime la Fecha de HOY -//
const toDay = () => {

    const now = new Date();

    const now_year = now.getFullYear();
    const now_month = now.getMonth() + 1;
    const now_day = now.getUTCDate();
    const now_weekday = now.getDay();
    const now_hora = now.getHours();
    const now_minutos = now.getMinutes();
    const now_segundos = now.getSeconds();

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const mes = [" ", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date_now = `La fecha de hoy es ${ dias[now_weekday] }, ${now_day } de ${ mes[now_month]} de ${now_year}`


    //const date_now = `${dias[now_weekday]}, ${now_day } de ${mes[now_month]} de ${now_year}`

    return date_now

}


//- Función Tradicional de JavaScript
//- Imprime la Hora de HOY y su Zona Horaria de HOY -//
function toTime(){

    const now  = new Date();

    // Fragmentando la Fecha de HOY
    const now_year    = now.getFullYear();
    const now_month   = now.getMonth() + 1;
    const now_day     = now.getUTCDate();
    const now_weekday     = now.getDay();
    const now_hora    = now.getHours();
    const now_minutos = now.getMinutes();
    const now_segundos = now.getSeconds();

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const mes = [" ", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const resolvedOptions = Intl.DateTimeFormat().resolvedOptions()

    const date_now = `a las ${now_hora}:${now_minutos}:${now_segundos}, Zona Horaria de ${resolvedOptions.timeZone}`

    return date_now

}

