
let categoria = document.querySelector("#categoria");
let cantidad = document.querySelector("#number");
let totalAPagar = document.querySelector("#totalAPagar");
const resumen = document.querySelector("#resumen");


//Funcion del boton resumen



  function clickResumen() {
    
    let total = 0;

    if (categoria.value == 1) {

    total = (cantidad.value * 200) * 0.2;
    
    totalAPagar.textContent = total; 
      
    }
    if(categoria.value == 2){
      total = (cantidad.value * 200) * 0.5;
    
    totalAPagar.textContent = total; 
    }
    if (categoria.value == 3){

      total = (cantidad.value * 200) * 0.85;
    
    totalAPagar.textContent = total; 
      
    } 
    else
    {
      console.log("No ingresaste ninguna cantidad o categoria");
    }


  }
  //