class veiculo{
    marca;
    modelo;
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo= modelo;

    }

}


class moto extends veiculo {
    parrilla;
    caja;
    constructor(marca, modelo, parrilla, caja){
        super(marca,modelo);
        this.parrilla =parrilla
        this.caja = caja
    }
     informacionVehiculo(){
        console.log()
     }
}
