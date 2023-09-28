let ejemplo = () =>{
    alert("Hola")
}
setTimeout(ejemplo,1000);

const aleatorios = (repetición, callbacks) => {
    let numeros = [];
    for( let i= 0; i<repetición ; i++){
     const numA1 = Math.ceil(Math.random()*repetición+1)
     números.push(numA1)
     if(numA1 === 10){
        callbacks({error:true,msj:"Salio 10...", números})
        return;
     }
    }
    return callbacks(null, {error:false, msj:"Exitoso",números})
}

aleatorios(10,(error, success)=>{
  if(error){
    console.error(error);
    return
  }
  console.log(success);
})