const alunosTurmaA = [
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

const alunosTurmaB = [
    {
        nome: "Beltrano",
        nota: 8
    },
    {
    nome: "Pereira",
    nota: 3.3
    },
    {
    nome: "Fulano",
    nota: 7
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)


function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A media da ${turma} foi de ${media}. Parabens`);
    
    } else {
        console.log(`A média da ${turma} é menor que 5`)
    }
    
    
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

