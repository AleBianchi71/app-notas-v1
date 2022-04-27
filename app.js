let fs = require('fs');

let a = fs.readFileSync("tareas.json","utf-8");


let b = JSON.parse(a);


let pedido = process.argv[2]


    switch(pedido){
        case "listar":
        console.log(b);
        break;
        case undefined:
        console.log("Atencion - Tienes que pasar una acción");
        break;
        default :
        console.log("No entiendo que quieres hacer ");
    }

