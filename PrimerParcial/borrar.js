const { filtrarPorEstado } = require("../Clase 6/funcionesDeTareas");

let persona = {
    nombre : 'Juan',
    capacidadDePagoEnCuotas : 20000,
    capacidadDePagoTotal : 100000
};
let autos = [{
  marca :"Ford",
  modelo :"Fiesta",
  precio : 150000,
  kilometraje : 200,
  color  : "Azul",
  cuotas :  12,
  anio : 2019,
  patente : "APL123",
  vendido : false 
  },
 {
  marca :"Toyota",
  modelo :"Corolla",
  precio : 100000,
  kilometraje : 0,
  color  : "Blanco",
  cuotas :  14,
  anio : 2019,
  patente : "JJK116",
  vendido : false 
  }    
 ]


function puedeComprar (patente, nombre) {
      
      if ((autos.precio / autos.cuotas) > persona.filter persona.capacidadDePagoEnCuotas) {
        return false }
      return true    
    }

console.log(puedeComprar("APL123","Juan"))
console.log(puedeComprar.persona.capacidadDePagoEnCuotas)