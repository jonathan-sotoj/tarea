
class ProductosElectronicos{
    precio;
    marca;
    modelo;
    constructor(precio, marca, modelo){
        this.precio = precio;
        this.marca = marca;
        this.modelo = modelo;

    }
    get precio(){
        return this.marca;
    }
    get marca(){
        return this.marca;
    }
    get modelo(){
        return this.modelo;
    }
    set precio (precio){
        this.precio=precio;
    }
    set marca(marca){
        this.marca=marca;
    }
    set modelo(modelo){
        this.modelo=modelo;
    }
 
}