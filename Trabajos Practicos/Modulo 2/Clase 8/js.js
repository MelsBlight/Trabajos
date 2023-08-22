agregarElement = () =>{

     let list = document.createElement('li');
         list.textContent = inputList.value;
     listElement.appendChild(list);
     inputList.value='';
 }
 
 let listElementsArray = [];
 let listadoElementos = document.querySelector("#listadoElementos");
 let addElemts = document.getElementById("addElemts");
 let updateElemts= document.getElementById("updateElemts");
 let positionElement = 0;
 
 let addElementsArray = (elements) =>{
     listElementsArray.push(elements);
 }
 
 let mostarElementos = ()=>{
     let textElemt ='';
     listElementsArray.forEach((element,position)=>{
         textElemt += `<tr><td>#${position} => ${element}</td><td>
         <button type="button" onclick="deleteButton('${element}')">Eliminar</button>
         <button type="button" onclick="editarButton('${element}')">Editar</button>
         </td></tr>`;
     });
     listadoElementos.innerHTML = textElemt;
 }
 
 let filterElement = (elementBuscar) =>{
     return listElementsArray.findIndex((element)=>{
         return element == elementBuscar;
     })
 }
 
 let addButtonList = () =>{
     let listInput = document.getElementById('listInput');
     let textInput = listInput.value;
     textInput = textInput.trim();

     if(textInput.length > 0 && filterElement(textInput) == -1){
         addElementsArray(textInput);
         listInput.value='';
         listInput.focus();
         mostarElementos();
         console.table(listElementsArray)
     }
     else{
         alert("Error")
     }
     
 }
 
 let deleteButton = (element) =>{
     let position = filterElement(element);
     listElementsArray.splice(position,1);
     mostarElementos();
 }
 
 let editarButton = (element) =>{
     let listInput = document.getElementById('listInput');
     listInput.value = element;
     positionElement =  filterElement(element);
     showHiddenButton(2);
 }
 
 let showHiddenButton = (mostar)=>{
     if(mostar ==1){
         addElemts.classList.remove('oculto');
         updateElemts.classList.add('oculto');
     }
     else{
         addElemts.classList.add('oculto');
         updateElemts.classList.remove('oculto');
     }
 }
 let modificarButton = () =>{
 
     let listInput = document.getElementById('listInput');
     let textInput = listInput.value;
     textInput = textInput.trim();
     console.log(filterElement(textInput))
     console.log(positionElement)

     if(textInput.length > 0 && (filterElement(textInput) == -1 || filterElement(textInput) == positionElement) ){
         listElementsArray[positionElement] = textInput;
         listInput.value='';
         listInput.focus();
         mostarElementos();
         showHiddenButton(1);
     }
     else{
         alert("Error")
     }
 
 }