//ejemplo 1
class carro {
    marca 
    modelo
    aceleracion
    //constructor(aceleracion){
        //this.aceleracion=aceleracion;
    //}

    
    

}
//class depostivo extends carro{
//turbo
//suspencion
//}

let carro1= new carro(88)
//let carro2= new carro();
//carro1.aceleracion=120;
console.log(carro1.aceleracion)

//ejemplo2

class persona{
    cui
    nombre 
    apellido
    fecha_nacimiento
    Genero 
    estatura

    constructor(cui,nombre,Genero){
        this.cui = cui
        this.nombre= nombre
        this.Genero= Genero
        this.saludar()

    }

    saludar(){
        console.log("hola me llamo", this.nombre)
    }
    //parametros
    velocidad(distancia,tiempo){
        const vel = distancia/tiempo;
        return vel;
       }
       static saltar (){
        console.log("la persona salta ");
       }


}
let ayudantye=new persona(1010110,"javier", "masculino");
//let persona1=new persona();
//persona1.cui = 10101010;
//persona1.nombre="roberto";
//persona1.apellido="guiron";
//persona1.Genero="masculino";
//persona1.estatura=1.50;
//persona1.fecha_nacimiento="15/01/2000"
//persona1.saludar();
//console.log(persona1.velocidad(10,5));
//console.log(persona1)

//ejemplo3 math

//let numero = new Math();
//console.log(Math.floor)
//persona.saltar()