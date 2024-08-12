let n1 = prompt("ingrese un numero: ");
let n2 = prompt("ingrese otro numero: ");
let n3 = prompt("ingrese tercer numero");

if((parseInt(n1) > parseInt(n2)) && (parseInt(n1) > parseInt(n3))){

    alert("gracias por ingresar: " +" " + n1 + " "+ n2 + " " + n3);
}if((parseInt(n2) > parseInt(n1)) && (parseInt(n2) >parseInt(n3)) ){
  
    alert("gracias por ingresar: " + " " + n2 + " " + n1 + " " + n3);
}if((parseInt(n3) > parseInt(n2)) && (parseInt(n3) >parseInt(n1))){
    
    alert("gracias por ingresar: " + " " + n3 + n2 + n1);
} 