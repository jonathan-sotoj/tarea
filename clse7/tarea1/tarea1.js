
function mostrarCuadrado() {
    
    let numero = parseInt(prompt("Introduce un número:"));

    
    if ((numero <= 1)) {
        alert("El valor introducido no es un número válido.");
        alert("porvafor ingrese numero positivo: ")
    } else {
        
        let cuadrado = numero * numero;

       
        alert("El cuadrado de " + numero + " es " + cuadrado);
    }
} 
        
// Llamar a la función para iniciar el proceso
mostrarCuadrado();
