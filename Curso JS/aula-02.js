const numero1 = 1; // const da erro pois não é alteravel, é uma variavel constante
let numero2 = 2

if (numero2 === 2){
    numero2 = 6
}
if (numero1 === 1){
    numero1 = 6
} // comando de alteração não funciona com const, apenas em let

console.log(numero2, numero1)
