window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js")
    
    
    }
    
    
    
    }


function calc(){

let select = document.querySelector('#moeda');
let valor = document.getElementById('valor')
let result = document.getElementById('resultado')

let values = select.options[select.selectedIndex].value;

if(values == "dolar"){

let convert = valor.value * 5.21;
result.textContent = convert

}else{

    let convert = valor.value * 0.00076;
    result.textContent = convert


}



}