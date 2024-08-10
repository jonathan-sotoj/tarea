//atributos
class cuenta{
    id;
    nombre;
    tipoCuenta;
    saldo;
//inicializador
    constructor(id, nombre, tipoCuenta,saldo){

        this.id = id;
        this.nombre = nombre;
        this.tipoCuenta = tipoCuenta;
        this.saldo = saldo;
    }
    //metodos
    abonar(dinero){
        this.saldo += dinero;
    }
    debitar(monto){
        this.saldo -= monto;        
    }
    consultaSaldo(){
        console.log("HOLS BIENVENIDO: " )
    }
}
let cuenta1 = new cuenta(500);
let cuenta2 = new cuenta(1000);

cuenta1.consultaSaldo();
cuenta1.abonar(900);
cuenta1.consultaSaldo();