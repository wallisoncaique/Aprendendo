/*
 * Aritméticos
 * + Adição / Concatenação
 *  - Subtração
 *  / Divisão
 *  * Multiplicação
 *  ** potenciação
 *  % Resto da divisão
 * Hierarquia 
   ()
   **
   * / %
   + -
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2); //SOMA

const num3 = '5';
const num4 = 10;
console.log(num3 + num4); //CONCATENAÇÃO

const num5 = 55;
const num6 = 10;
console.log(num5 - num6); //SUBTRAÇÃO

const num7 = 10;
const num8 = 2;
console.log(num7 / num8); //DIVISÃO

const num9 = 5;
const num10 = 10;
console.log(num9 * num10); //MULTIPLICAÇÃO

const num11 = 2;
const num12 = 10;
console.log(num11 ** num12) //POTENCIAÇÃO

const num13 = 10;
const num14 = 5;
console.log(num13 % num14); //RESTO DA DIVISÃO

let contador = 1;
contador++;
contador++;
contador++;
contador++;
console.log(contador); // Incremento = ++

let contador2 = 10;
contador2--;
contador2--;
contador2--;
console.log(contador2); // Decremento = --
