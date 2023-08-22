let dataPersona = [];
const addDataPersona = (firstName,lastName,birthday,address,status,orientation=true)=>{
    let person ={
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if(orientation){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }
}

const addFormPersona = () =>{
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let birthday = document.getElementById("birthday")
    let address = document.getElementById("address")
    let status = document.getElementById("status")

    if (
        firstName.value.trim() === "" ||
        lastName.value.trim() === "" ||
        birthday.value.trim() === "" ||
        address.value.trim() === "" ||
        status.value.trim() === ""
    ) {
        alert("Complete todos los campos.");
        return;
    }

   if (dataPersona.some((person) => person.firstName == firstName.value || person.lastName == lastName.value)){
    alert("Persona ya existente");
    return;
   }

    addDataPersona(firstName.value,lastName.value,birthday.value,address.value,status.value);
   firstName.value="";
   lastName.value="";
   birthday.value="";
   address.value="";
   status.value="";
    console.table(dataPersona);
}