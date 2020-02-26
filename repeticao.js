// const alunosTurmaB = [
//     {
//         nome: "Beltrano",
//         nota: 8
//     },
//     {
//         nome: "Pereira",
//         nota: 3.3
//     },
//     {
//         nome: "Maria",
//         nota: 7
//     }
// ]


const alunos = [
    {
        nome: "Silva",
        nota:9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    }
]



function calculaMedia() {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) { 
        soma = soma + alunos[i].nota
        
    }

    const media = soma / alunos.length
    return media
    console.log(media)
}

const media1 = calculaMedia()

console.log(media1)





// const media2 = calculaMedia(alunosTurmaB)


// function enviaMensagem(media, turma) {
//     if (media > 5) {
//         console.log(`A media da ${turma} foi de ${media}. Parabens`);
    
//     } else {
//         console.log(`A média da ${turma} é menor que 5`)
//     }
    
    
// }

// enviaMensagem(media1, 'turmaA')
// enviaMensagem(media2, 'turmaB')

