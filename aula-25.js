const jose = {
    nome: 'José',
    idade: 35,
    peso: 80,
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua qualquer',
    numero: 432,
    pais: 'Brasil',
    temFilhos: true,
}

const exibirInformacoes = (pessoa) => {
    console.log(`Dados do ${pessoa.nome}: `, pessoa);
}

exibirInformacoes(jose)