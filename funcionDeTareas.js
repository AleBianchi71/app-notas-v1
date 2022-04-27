let fs = require('fs');
let a = fs.readFileSync("app.js","utf-8");


function escribirjSON(array){
    array["titulo","appDeNotas","estado","enProceso"]
    let tarea = JSON.parse(array)
    let b = fs.writeFileSync();
    
}

