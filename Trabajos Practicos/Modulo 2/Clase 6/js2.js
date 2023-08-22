const prompt =require('prompt-sync')({sigint:true});



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


addDataPersona("Rubius", "OMG", 33, "Andorra", 0, true)
addDataPersona("Juans", "Guarnizo", 26, "Ibagué", 0, true)
addDataPersona("Alex", "Quackity", 20, "México", 0, true)
addDataPersona("Ari", "Gameplay", 25, "Ciudad Juárez", 0, true)
addDataPersona("Vegetta", "777", 35, "Madrid", 0, true)
addDataPersona("German", "Garmendia", 36, "Copiapó", 0, true)
addDataPersona("Auron", "Play", 34, "Badalona", 0, true)
addDataPersona("Willy", "Rex", 30, "España", 0, true)
addDataPersona("Mangel", "Rogel", 31, "Santaclara", 0, true)
addDataPersona("Spreen", "Speed", 22, "Santa Fe", 0, true)

let sumaEdades = dataPersona.reduce((sumaEdades,persona)=>{
    return sumaEdades+ persona.birthday;
},0);

let promedioReduce = sumaEdades / dataPersona.length;
console.log(promedioReduce)

let palabra ="RubiUS, omGG,  A, N,   ";

console.log(palabra.length);

console.log(palabra.toUpperCase());
console.log(palabra.toLocaleLowerCase());

console.log(palabra.trim().length);

console.log(palabra.replace("S","L"))

console.log(palabra.replaceAll("S","L"))

console.log(palabra[0])

console.log(palabra.split("S"));

console.log(palabra.toLowerCase().includes("youtuber"))

let words = prompt("Ingresar criterio:")

let dataFilter = dataPersona.filter((element)=>{
   return element.firstName.toLowerCase().includes(words.toLowerCase()) || 
    element.lastName.toLowerCase().includes(words.toLocaleLowerCase());
})

console.table(dataFilter)

console.log("**********")
dataFilter = dataPersona.filter((element)=>{
    words = words.toLowerCase();
    let nombre = element.firstName.toLowerCase()
    return nombre.startsWith(words);
 })

 console.table(dataFilter)