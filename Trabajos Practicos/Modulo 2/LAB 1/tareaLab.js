// Saber el mayor

let num1= Number (prompt ("Ingresar el primer número: "))
let num2= Number (prompt ("Ingresar el segundo número: "))
let num3= Number (prompt ("Ingresar el tercer número: "))

if(!(Number(num1))||!(Number(num2))||!(Number(num3))){
    console.log("Ingresar solo números")
}
else if (num1 > num2 & num1 > num3) {
    console.log("Entre",num1,num2, "y", num3, "el mayor es: ",num1)
}
else if (num2 > num1 & num2 > num3) {

    console.log("Entre",num1,num2, "y", num3, "el mayor es: ",num2)
}
else {
    console.log("Entre",num1,num2, "y", num3, "el mayor es: ",num3)
}


// Tabla multiplicar

let num4= prompt ("Ingresar el número para multiplicar: ");


for(let i=1; i<=10; i++){
    console.log(i,"*", num4, "= ",(num4*i))
}

// Tabla división

let num5= prompt ("Ingresar el número para dividir: ");


for(let i=1; i<=10; i++){
    const division= `${num5*i} / ${num5} = ${num5*i/num5}` 
    console.log(division)
}