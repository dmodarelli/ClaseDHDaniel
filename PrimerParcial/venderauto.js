let autos = require("./autos") ;

let concesionaria = {
    autos : autos,
     buscarAuto: function buscar(patente) {
         let autoEncontrado = null
         this.autos.forEach(auto => {
             if(auto.patente === patente){
                 autoEncontrado = auto;
                 
             }
         })
        return autoEncontrado;
        
     },
     venderAuto: buscarAuto(),{
              if (autoEncontrado.vendido === false){ 
             autoEncontrado.vendido = true
         }
         return vendo;
    },
    autosQuePuedeComprar: function(persona){
        let listaAutos = this.autosParaLaVenta();
        let autosPosibles = [];
        listaAutos.forEach(function(auto){
           if(concesionaria.puedeComprar(auto,persona)){
              autosPosibles.push(auto);
           }
        });
        return autosPosibles;
     } 
} 
   // console.log(buscar('APL123'))      
    