let autos = require("./autos") ;
let persona = {
    nombre : 'Juan',
    capacidadDePagoEnCuotas : 20000,
    capacidadDePagoTotal : 100000
}
let concesionaria = {
    autos : autos,
    persona : persona,
    buscarAuto: function buscar(patente) {
         let autoEncontrado = E
         this.autos.forEach(auto => {
             if(auto.patente === patente){
                 autoEncontrado = auto;
                 
             }
         })
        return autoEncontrado;
        
     },
    venderAuto: function (patente) {
          if (this.buscarAuto (patente) != null) {
            return (this.buscarAuto(patente).vendido = true) 
        }
    }, 
   autosParaLaVenta: function () { 
        let autosDisponibles = this.autos.filter(function (patente)       
        { return patente.vendido == false });
        return autosDisponibles
      },
     autosNuevos: function (){
         const venta = this.autosParaLaVenta();
         return venta.filter(auto => auto.km <100)
      },
  listaDeVentas: function () {
        let ventas = this.autos.filter(function (patente) {
            return patente.vendido == true
        });
        let lista = [];
        ventas.forEach(function (costo) {
            lista.push(costo.precio);
        })
        return lista;
    },
    totalDeVentas: function () {
        let total = this.listaDeVentas().reduce((acumulado, numero) => {
            return acumulado + numero;
        }, 0);
        return total;
    },
    puedeComprar: function (patente, nombre) {
        const venta = this.buscarAuto(patente);
        let cuota = this.persona.nombre = nombre?persona.capacidadDePagoEnCuotas:0;
        let total = this.persona.nombre = nombre?persona.capacidadDePagoTotal:0;    
        if ((venta.precio > total) || (/*(venta.precio / venta.cuotas)*/ (venta.precio * 0.20) > cuota)) {
            return  (cuota)  } else {
      return true }
    }
}
console.log(concesionaria.puedeComprar("JJK116","Juan"))
console.log(concesionaria.puedeComprar("APL123","Juan"))
//console.log(concesionaria.puedeComprar.venta.precio)
//console.log(concesionaria.autosParaLaVenta("APL123"))
 //console.log(concesionaria.buscarAuto("JJK116"))
// console.log(concesionaria.buscarAuto("APL123"))