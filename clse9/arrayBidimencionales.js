//ejemplo1
let matris= [
[1,2,3],
[4,5,6],
[7,8,9]
];
//console.log(matris[0][0]);
//console.log(matris[1][2]);


//ejemplo2 sustituir un valor 
//matris[2][0]= "mango";
//console.log(matris[2][0]);

//ejemlo3
//matris[2][0]= "mango";
//console.log(" el fila hay " + matris[0].length);
//console.log("en la matriz hay "+ matris.length);

for (let fila = 0; fila < matris.length; fila++) {
   for (let columnas = 0; columnas < matris[fila].length; columnas++) {
       console.log(matris[fila][columnas]);
    
}
}