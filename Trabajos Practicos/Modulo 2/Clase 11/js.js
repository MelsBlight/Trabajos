let ejemplo = ()=>{
    alert("Hola");
  }

  setTimeout(()=>{

  },2000);
  
  const elements = [1,5,6,8,3,10];
  elements.forEach((index,posicion)=>{
    console.log(index);
  });
  
  const aleatorios = (Repeticiones, callbacks) =>{
    let números = [];
    for(let i=0; i<Repeticiones; i++){
        const numAl = Math.floor(Math.random()*Repeticiones+1);
        números.push(numAl);
        if(numAl === 10){
            callbacks({error:true,message:"Salio 10", números});
            return;
        }
    }
    return callbacks(null,{error:false,message:"Exitoso",números})
  
  }
  
  aleatorios(10,(error,success)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(success);
  
  })

  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
      .finally(()=>{ console.log("Finalizada")});

  const aleatoriosPromise = async (Repeticiones)=>{
    return new Promise((resolve,reject)=>{
        let números = [];
        for(let i=0; i<Repeticiones; i++){
            const numAl = Math.floor(Math.random()*Repeticiones+1);
            números.push(numAl);
            if(numAl === 10){
                reject({error:true,message:"Salio 10", números});
            }
        }
        resolve({error:false,message:"Exitoso",números});
    })
  
  }
  
  aleatoriosPromise(14)
            .then((data)=>{
                console.log(data);
            }).catch((e)=>{
                console.error(e);
            })

  const requestAsync = async ()=>{
    return await fetch().then(response => response.text);
  }
  
  const validar = () =>{ 
    let input = document.getElementById("Input").value;
    let errorMensaje = document.getElementById("Error");
        try{

        if(input.trim() =="") throw "Esta vacio";
        if(isNaN(input)) throw "No es un número";
  
        }
        catch(error){

        errorMensaje.innerHTML = error;
        }
  }