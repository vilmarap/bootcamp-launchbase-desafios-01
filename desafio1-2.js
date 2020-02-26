// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
// Os dados a serem armazenados são nome: rocketseat, cor: roxo, foco: programação, endereço: rua: rua guilherme gembala, numero 260

const empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programacao",
}

const endereco = {
    rua: "Rua Guilherme Gembala",
    num: 260
}

console.log(`A ${empresa.nome} está localizada em ${endereco.rua}, ${endereco.num}`)