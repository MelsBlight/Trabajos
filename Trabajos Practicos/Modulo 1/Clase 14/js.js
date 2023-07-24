const button2= document.getElementById("button2")
const button3= document.getElementById("button3")

const cuadro1= document.querySelector(".cuadro1")
const cuadro2= document.querySelector(".cuadro2")
const cuadro3= document.querySelector(".cuadro3")

button2.addEventListener("click", function(){
    cuadro1.style.background="blue"
    cuadro1.style.height="15vh"
    cuadro1.style.border="2px solid white"
})

button2.addEventListener("click", function(){
    cuadro2.style.background="blue"
    cuadro2.style.width="100%"
    cuadro2.style.height="15vh"
    cuadro2.style.border="2px solid white"
    
})

button2.addEventListener("click", function(){
    cuadro3.style.background="blue"
    cuadro3.style.width="100%"
    cuadro3.style.height="15vh"
    cuadro3.style.border="2px solid white"
})
button3.addEventListener("click", function(){
    cuadro1.style.background="rgb(173, 173, 173)"
    cuadro1.style.height="10vh"
    cuadro1.style.border="1px solid black"
})
button3.addEventListener("click", function(){
    cuadro2.style.background="rgb(148, 147, 147)"
    cuadro2.style.width="50%"
    cuadro2.style.height="50vh"
    cuadro2.style.border="1px solid black"
})
button3.addEventListener("click", function(){
    cuadro3.style.background="rgb(107, 105, 105)"
    cuadro3.style.width="50%"
    cuadro3.style.height="50vh"
    cuadro3.style.border="1px solid black"
})