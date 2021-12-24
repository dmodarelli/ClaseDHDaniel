const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJason: function(arrayDeTareas){ 
    let arrayString = JSON.stringify(arrayDeTareas)
    fs.writeFileSync (this.archivo, arrayString);
    },
    guardarTarea: function (tarea) { 
     let tareas = this.leerArchivo() 
     tareas.push(tarea);
      this.escribirJason(tareas)  
    },
    filtrarPorEstado(estadoFiltrar){
       let tareas = this.leerArchivo()
       let tareasFiltradas = tareas.filter(
           function (t) {
               return t.estado === estadoFiltrar
               
           }
       )
    return tareasFiltradas;
    }
}

module.exports = archivo