/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg 
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1994
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 31;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso/ (alturaEmM * alturaEmM)
anoNascimento = 2025 - idade

console.log('Dados do paciente:');
console.log('Nome:', nome,);
console.log('Sobrenome:', sobrenome);
console.log('Idade:', idade);
console.log('Peso:', peso +'kg');
console.log('Altura:', alturaEmM + 'M');
console.log('IMC:', peso/ (alturaEmM * alturaEmM));
console.log('Ano de Nascimento:', 2025 - idade);
console.log();

console.log(nome, sobrenome, 'tem', idade + 'anos, pesa', peso +'kg');
console.log('tem', alturaEmM + 'M', 'de altura e seu IMC é de', imc);
console.log(`${nome} nasceu em ${anoNascimento}.`); // a forma mais moderna e correta de declarar as variaveis é usando ${} 