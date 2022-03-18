const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function(tareas){
        let auxiliarTareas = JSON.stringify(tareas, null, " ");
        fs.writeFileSync(this.archivo, auxiliarTareas);
    },

    guardarTarea: function(tarea){
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);

    }
}
module.exports = archivoTareas;