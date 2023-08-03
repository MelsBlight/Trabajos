const prompt=require("prompt-sync")({sigint:true});

let dataPersona= [];

const addDataPersona = (firstName,lastName,birthday,address,status, orientacion) => {
   let person= {
    firstName,
    lastName,
    birthday,
    address,
    status
   };
    if(orientacion){
        dataPersona.push(person);
    } else{
        dataPersona.unshift(person);
    }

}

addDataPersona("Dean", "Winchester", 44, "USA", 0, true)
addDataPersona("Castiel", "Novak", 48, "Cielo", 0, true)
addDataPersona("Nick", "Nelson", 17, "Londres", 0, true)
addDataPersona("Charlie", "Spring", 17, "Inglaterra", 0, true)
addDataPersona("Sherlock", "Holmes", 40, "Londres1", 0, true)
addDataPersona("Amity", "Blight", 14, "Demon", 0, true)

console.table(dataPersona)

const filtrarPorNombre = (nombre) => {
    return dataPersona.filter((element) => {
        return element.firstName.toLowerCase().includes(nombre.toLowerCase());
    });
};

let nombreBuscar = prompt("Ingresar nombre:");
let dataPersonaFiltradoPorNombre = filtrarPorNombre(nombreBuscar);

console.table(dataPersonaFiltradoPorNombre);
console.log("**********************************");

const calcularPromedioEdades = (personas) => {
    if (personas.length === 0) {
        return 0;
    }
    const sumaEdades = personas.reduce((total, persona) => total + persona.birthday, 0);
    return sumaEdades / personas.length;
};

const promedioEdades = calcularPromedioEdades(dataPersonaFiltradoPorNombre);
console.log("Promedio de edades:", promedioEdades);