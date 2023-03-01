import moment from "moment-timezone";

export const translate = (description) => {
  if (description === "moderate rain") {
    return "Lluvia moderada";
  } else if (description === "few clouds") {
    return "Nubes dispersas";
  } else if (description === "sky is clear") {
    return "Cielo despejado";
  } else if (description === "light rain") {
    return "Lluvia ligera";
  } else if (description === "overcast clouds"){
    return "Nublado"
  }
};

export const translateMes = (month) => {
    let fecha = month * 1000;
    let fechaMoment = moment(fecha).tz("Europe/Madrid").format("MMMM");
    const mes = fechaMoment.slice(0, 3);
    

    let numero = month * 1000;
    let fechaNumero = moment(numero).tz("Europe/Madrid").format("DD");
    
    let mesTraducido;
  if (mes === "Jan") {
    return "Enero";
  } else if (mes === "Feb") {
    mesTraducido = "Febrero";
  } else if (mes === "Mar") {
    mesTraducido = "Marzo";
  } else if (mes === "Apr") {
    mesTraducido = "Abril";
  } else if (mes === "May") {
    mesTraducido = "Mayo";
  } else if (mes === "Jun") {
    mesTraducido = "Junio";
  } else if (mes === "Jul") {
    mesTraducido = "Julio";
  } else if (mes === "Aug") {
    mesTraducido = "Agosto";
  } else if (mes === "Sep") {
    mesTraducido = "Septiembre";
  } else if (mes === "Oct") {
    mesTraducido = "Octubre";
  } else if (mes === "Nov") {
    mesTraducido = "Noviembre";
  } else if (mes === "Dec") {
    mesTraducido = "Diciembre";
  } 
  return `${fechaNumero} de ${mesTraducido}`
};

export const translateDias = (day) => {
  // para poder sacar el día en letras.
  let fecha = day * 1000;
  let fechaMoment = moment(fecha).tz("Europe/Madrid").format("dddd");
  const dia = fechaMoment.slice(0, 2);

  //  Para poder sacar el día con número.

  let numero = day * 1000;
  let fechaNumero = moment(numero).tz("Europe/Madrid").format("D");

  let diaTraducido;

  if (dia === "Mo") {
    diaTraducido = "Lunes";
  } else if (dia === "Tu") {
    diaTraducido = "Martes";
  } else if (dia === "We") {
    diaTraducido = "Miércoles";
  } else if (dia === "Th") {
    diaTraducido = "Jueves";
  } else if (dia === "Fr") {
    diaTraducido = "Viernes";
  } else if (dia === "Sa") {
    diaTraducido = "Sábado";
  } else if (dia === "Su") {
    diaTraducido = "Domingo";
  }

  return `${diaTraducido}  ${fechaNumero}`;
};
