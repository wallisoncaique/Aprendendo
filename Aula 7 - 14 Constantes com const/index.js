const primeiroNumero = '5'; // colocando string + number ele não soma ele faz concatenação
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado +5;

console.log(typeof(primeiroNumero + segundoNumero)); // o js trata o número como string também ao ser feito a junção

/*
constantes = const não podem ser alteradas ao longo do codigo
pode pegar o valor de uma const e jogar para outra const, mas não pode alterar

*/