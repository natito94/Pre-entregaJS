//Simulador de parejas

alert("Bienvenido a nuestro cuestionario: ¿El o Ella te ama?")
alert("En este simple cuestionario podras determinar si la persona por la cual estas tan enamorado, siente lo mismo por vos.")
alert("Recuerda ingresar valores del '0' al '10'")

//Se declaran las variables y bucles

let datoUno = parseInt(prompt("¿Cuantas veces ves a tu pareja por semana?")) 
while(datoUno < 0 || datoUno > 7) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '7'");
    datoUno = parseInt(prompt("¿Cuantas veces ves a tu pareja por semana?"));
}
let datoDos = parseInt(prompt("Del '0' al '10' ¿Cuan interesada esta tu pareja en tus pasatiempos?"))
while(datoDos < 0 || datoDos > 10) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '10'");
    datoDos = parseInt(prompt("Del '0' al '10' ¿Cuan interesada esta tu pareja en tus pasatiempos?"));
}
let datoTres = parseInt(prompt("¿Cuantos dias a la semana tu pareja te invita a pasar tiempo juntos?"))
while(datoTres < 0 || datoTres > 7) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '7'");
    datoTres = parseInt(prompt("¿Cuantos dias a la semana tu pareja te invita a pasar tiempo juntos?"));
}
let datoCuatro = parseInt(prompt("¿Del '0' al '10' cuan sincera piensas que es tu pareja?"))
while(datoCuatro < 0 || datoCuatro > 10) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '10'");
    datoCuatro = parseInt(prompt("¿Del '0' al '10' cuan sincera piensas que es tu pareja contigo?"));
}
let datoCinco =parseInt(prompt("¿Del '0' al '10' cuan atenta es tu pareja contigo?"))
while(datoCinco < 0 || datoCinco > 10) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '10'");
    datoCinco = parseInt(prompt("¿Del '0' al '10' cuan controladora piensas que es tu pareja?"));
}
let datoSeis =parseInt(prompt("¿Del '0' al '10' cuan abierta es tu pareja contigo?"))
while(datoSeis < 0 || datoSeis > 10) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '10'");
    datoSeis = parseInt(prompt("¿Del '0' al '10' cuan abierta es tu pareja contigo?"));
}
let datoSiete =parseInt(prompt("¿Del '0' al '10' cuanto te apoya tu pareja en tus proyectos personales?"))
while(datoSiete < 0 || datoSiete > 10) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '10'");
    datoSiete = parseInt(prompt("¿Del '0' al '10' cuanto te apoya tu pareja en tus proyectos personales?"));
}
let datoOcho = parseInt(prompt("¿Del '0' al '10' cuan presente a estado tu pareja en tus momentos mas dificiles?"))
while(datoOcho < 0 || datoOcho > 10) {
    alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '10'");
    datoOcho = parseInt(prompt("¿Del '0' al '10' cuan presente a estado tu pareja en tus momentos mas dificiles?"));
}

let cantidadDatos = 8

//Funcion de promedio

function promedioAmor (datoUno, datoDos, datoTres, datoCuatro, datoCinco, datoSeis, datoSiete, datoOcho, cantidadDatos){
    let promedio = (datoUno + datoDos + datoTres + datoCuatro + datoCinco + datoSeis + datoSiete + datoOcho) / cantidadDatos;
    return promedio;
}
let promedio = promedioAmor (datoUno, datoDos, datoTres, datoCuatro, datoCinco, datoSeis, datoSiete, datoOcho, cantidadDatos)


//Condicional y fin del simulador

if(promedio <5){
    alert("Simplemente no te quiere.")
    alert("¡Animo! Hay muchos peces en el mar.")
} else if(promedio <=8 ) {
    alert("Ni muy muy, ni tan tan.")
} else if(promedio >=8){
    alert("Felicitaciones Tinki Winki!! Lograste que cayera ;D")
}





