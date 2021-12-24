let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) { 
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
       // let tareas = archivoTareas.leerArchivo();
       // for (let i = 0;  i < tareas.length; i++) {
       //     console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
       // };
        let tareasForEach = archivoTareas.leerArchivo();
        tareasForEach.forEach(function(tareas,i){
            console.log((i + 1) +'. ' + tareas.titulo + ' - ' + tareas.estado)
        });

        console.log()
        break;
    case 'crear':
        console.log('Creando tareas');
        console.log('--------------');
        let tarea = {
            titulo:process.argv[3],
            estado: "pendiente"
        }   
        archivoTareas.guardarTarea(tarea)
        console.log(tarea.titulo + " ->" + tarea.estado)

         break;
     case 'filtrar':
            console.log('Filtrando tareas');
            console.log('--------------');
            let filtro = process.argv[3];

            console.log('--------------');
            console.log(filtro);
            console.log('--------------');
            
            let tareasFiltradas = archivoTareas.filtrarPorEstado(filtro)
            tareasFiltradas.forEach(function(tareas,i){
                console.log((i + 1) +'. ' + tareas.titulo + ' - ' + tareas.estado)
            });
        break;    

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
