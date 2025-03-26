var edad = 10;
if (edad >= 65) {
  console.log("Usted obtiene sus ingresos de su pension");
} else if (edad < 65 && edad >= 18) {
  console.log("Cada mes recibe su salario");
} else if (edad < 18) {
  console.log("Obtiene una asignación");
} else {
  console.log("El valor de la variable edad no es numerico");
}

var day = "Domingo";

switch (day) {
  case "Lunes":
    console.log("Lunes");
    break;
  case "Martes":
    console.log("Martes");
    break;
  case "Miercoles":
    console.log("Miercoles");
    break;
  case "Juevess":
    console.log("Jueves");
    break;
  case "Viernes":
    console.log("Viernes");
    break;
  case "Sabado":
    console.log("Sabado");
    break;
  case "Domingo":
    console.log("Domingo");
    break;
  default:
    console.log("The is no such day")
}


for( var i = 0; i < 3;i++ ){
    console.log(i)
}

var i = 1;
while (i <= 3){

    console.log(i);
    i++;
}

for(var i = 1; i <=2; i++){
    for(var j = 1; j <=5; j++){
        console.log("Week", i, "Day", j)
    }
}