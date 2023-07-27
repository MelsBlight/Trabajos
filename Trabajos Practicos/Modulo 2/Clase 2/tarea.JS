let num = 30

if (num % 2 == 0) {
    console.log("Par")
}
else {
    console.log("Impar")
}
let num1 = 10
let num2 = 20
let num3 = 5

if (num1 > num2 & num1 > num3) {
    console.log(num1, "es el mayor")
}
else if (num2 > num1 & num2 > num3) {

    console.log(num2, "es el mayor")
}
else {
    console.log(num3, "es el mayor")
}

if (num1 < num2 & num1 < num3) {
    console.log(num1, "es el menor")
}
else if (num2 < num1 & num2 < num3) {

    console.log(num2, "es el menor")
}
else {
    console.log(num3, "es el menor")
}

let numero1 = 10
let numero2 = 20
let operacion = (numero1 / numero2)
let resultado;


switch (operacion) {
    case numero1 + numero2:
        resultado = (numero1 + numero2);
        break;

    case numero1 * numero2:
        resultado = (numero1 * nemuro2);
        break;

    case numero1 - numero2:
        resultado = (numero1 - numero2);
        break;

    case numero1 / numero2:
        resultado = (numero1 / numero2);
        break;

}
console.log("Resultado:", resultado)