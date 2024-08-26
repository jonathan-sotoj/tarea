var menu = "MENU: \n";
menu+= "1. sumar \n ";
menu+= "2. resta \n ";
menu+= "3. multiplicar \n ";
menu+= "4. salir \n ";

var cod=0;
do{
    alert (" seleciona una opcion del menu: \n")
cod=parseInt(prompt(menu));

switch (cod) {
    case 1: document.write("1. suma<br>") 
        if (cod===1) {
        let n1 = parseFloat(prompt("ingrese un numero: "));
        let n2 = parseFloat(prompt("ingrese otro numero: "));
        sumar = n1+n2
        alert(" la suma es : " + " " + sumar )
    }         
        break;
    case 2: document.write("2. resta<br>")  
        if (cod===2) {
            let n1 = parseFloat(prompt("ingrese un numero: "));
            let n2 = parseFloat(prompt("ingrese otro numero: "));
            resta = n1-n2
            alert(" la resta es: " + " " + resta )
        }      
        break;
    case 3: document.write("3. multiplicacion<br>")
         if (cod===3) {
            let n1 = parseFloat(prompt("ingrese un numero: "));
            let n2 = parseFloat(prompt("ingrese otro numero: "));
            multiplicar = n1*n2
            alert(" la muiltiplicacion es:" + " " + multiplicar );
        }       
        break;
    case 4: document.write("4. se saldra del menu<br>")
        alert("esta saliendo: ")
        break;
        

    default: document.write(" el codigo no existe:")
    
}


}while(cod !=4);

document.write("</h2")
