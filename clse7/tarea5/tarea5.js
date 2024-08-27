function sumarNumero() {
    let suma=0;
    let numero;
    

    while (true) {
        numero=parseFloat(prompt("ingrese numeros para sumarlos y ingrese 0 para ver el resultado"));

        suma +=numero;
        if (numero==0) {
            alert(" la suma de todos los numeros ingresados son: " + suma );
            break;  
            
            
        }   else {
              
            alert("ingrese un numero para sumarlo: ");
            continue;
            
        }
        
    }
    
}
sumarNumero();