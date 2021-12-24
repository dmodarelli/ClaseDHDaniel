console.log("T A R E A S")
console.log("...........\n");
/*
let tareas = [
    {
        titulo: "práctica de arrays",
        estado: "pendiente"
     },
     {
         titulo: "ejercicios de IF",
         estado: "terminado"
     },
     {
         titulo: "teoria de JASON",
         estado: "pendiente"
     }
]

let tareasAjson = JSON.stringify(tareas)
console.log(tareasAjson)
console.log(tareas);
*/


//for(let i = 0; i<tareas.length; i++){
//    console.log(tareas[i].titulo)
//}

//for(let i = 0; i<tareas.length; i++){
//  if (tareas[i].estado === "pendiente"){
//      console.log(tareas[i])
//  }
//}


const fs = require('fs')
let tareajson = fs.readFileSync("./texto.json", "utf-8")
let objeto = JSON.parse(tareajson)
//console.log(tareajson)
//console.log(objeto)
//console.log(fs)

//console.log(process.argv[2])

let accion = process.argv[2];
console.log(accion)

switch (accion){
    case 'listar':
    console.log(tareajson);
    break;
    case undefined:
    console.log('Atención, tienes que pasar una acción');
    break;
    default:
    console.log('No se entiende lo que dices')
}
