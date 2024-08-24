class tableroJuego {
    fila
    columna
    tableroTampas = []

    constructor(fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.tableroInicial();
    }

    tableroInicial() {
        for (let i = 0; i < this.fila; i++) {
            let filaTrampas = []
            for (let j = 0; j < this.columna; j++) {
                filaTrampas.push("  ")
            }
            let numeroTampa = this.generarNumero(4, 1);//3

            while (numeroTampa > 0) {
                const coordenada = this.generarNumero(this.columna - 1, 0)

                if (filaTrampas[coordenada] === "  ") {
                    filaTrampas[coordenada] = " #"
                    numeroTampa--;
                }
            }
            this.tableroTampas.push(filaTrampas);
        }
    }


    generarNumero(trampasMax, trampasMin) {
        const cantidad = Math.floor(Math.random() * (trampasMax - trampasMin + 1) + trampasMin);
        return cantidad;
    }

    imprimirTablero() {
        let giro = true;
        let numero = this.columna * this.fila;
        let columnas = '------------------------------------------------ \n'
        for (let i = 0; i < this.fila; i++) {
            let filas = ''
            let trampasFilas = ''
            if (giro) {
                for (let j = 0; j < this.columna; j++) {
                    if (numero < 10) {
                        filas += '|  ' + numero + ' |'
                    } else {
                        filas += '| ' + numero + ' |'
                    }
                    numero--;
                    trampasFilas += '| ' + this.tableroTampas[i][j] + ' |'
                }
                giro = false;
            } else {
                numero -= this.columna -1
                for (let j = 0; j < this.columna; j++) {
                    if (numero < 10) {
                        filas += '|  ' + numero + ' |'
                    } else {
                        filas += '| ' + numero + ' |'
                    }
                    numero++;
                    trampasFilas += '| ' + this.tableroTampas[i][j] + ' |'
                }
                giro = true;
                numero -= this.columna+1
            }
            columnas += filas + "\n"
            columnas += trampasFilas + "\n"
            columnas += '------------------------------------------------ \n'
        }
        console.log(columnas)
    }
}

const tabla = new tableroJuego(5, 7);
tabla.imprimirTablero();