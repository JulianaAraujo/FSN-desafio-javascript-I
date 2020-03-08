// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];



// implementação

//função para busca (separei pois a utilizo varias vezes e queria usar sem o texto de feedback)
const buscaNome = (nomeAluno) => { 
    return alunosDaEscola.filter(({nome}) => nome === nomeAluno) //desestrutura o array para comparar com a variavel recebida
}  

//função para buscar aluno e retornar feedback
const buscarAluno = (nomeAluno) => {

    if (buscaNome(nomeAluno).length){
        console.log(`O aluno ${nomeAluno} está matriculado`)
    } else {
        console.log(`O nome ${nomeAluno} não consta na base de dados`)
    }
    
};

//função para matricular aluno na escola
const adicionarAluno = (nomeAluno) => {

    let testeNome = parseInt(nomeAluno); //testa se há numeros no meio do nome
    
    if  (isNaN(testeNome) && (buscaNome(nomeAluno) == "false")) {
        let aluno = {
            nome: nomeAluno,
            notas: [],  
            cursos: [],
            faltas: 0
        }
            alunosDaEscola.push(aluno)
            console.log(`Aluno (a) matriculado com sucesso`)
    
    } else {
        console.log(`Dados invalidos ou aluno já matriculado`)
       
        }
}

//funçao para imprimir os alunos no console
const listarAlunos = () => {
    for (let aluno of alunosDaEscola) {
        console.log(`
            Nome: ${aluno.nome}
            Notas: ${aluno.notas}
            Cursos: ${aluno.cursos.map(curso => {      //map passa pelos cursos (quando há mais de um)
            return `${curso.nomeDoCurso} / Data de matricula: ${curso.dataMatricula}
            `
        })}
            Faltas: ${aluno.faltas}
            `);
    }
}

//função para matricular o aluno no curso 
const matricularAluno = (nomeAluno, curso) =>  {

    if (buscaNome(nomeAluno).length) {
        buscaNome(nomeAluno)[0].cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date()
        })

        console.log(`${nomeAluno} foi matriculado no curso ${curso} com sucesso.`)
    } else {
        console.log(`O nome${nomeAluno} não consta na lista de alunos`)
    }
}

//função para aplicar falta ao aluno
function aplicarFalta(nomeAluno) {
    
    if (buscaNome(nomeAluno).length) {
        if (buscaNome(nomeAluno)[0].cursos.length) {
            buscaNome(nomeAluno)[0].faltas += 1;

            console.log(`${nomeAluno} falta registrada com sucesso.`)
        } else {
            console.log(`${nomeAluno} não está matriculado em nenhum curso para receber falta.`)
        }

    } else {
        console.log(`O nome:${nomeAluno}, não consta na lista de alunos`)
    }

}


//função para aplicar nota ao aluno
const aplicarNota = (nomeAluno, nota) => {
   

    if (buscaNome(nomeAluno).length) {
        if (buscaNome(nomeAluno)[0].cursos.length) {
            buscaNome(nomeAluno)[0].notas.push(nota);

            console.log(`${nomeAluno} recebeu a nota ${nota} com sucesso.`)
        } else {
            console.log(`${nomeAluno} não está matriculado em nenhum curso.`)
        }

    } else {
        console.log(`${nomeAluno} não consta na lista de alunos`)
    }

}

//testa se a media das notas do aluno é maior q 7 e se as faltas são menores q 4
const aprovarAluno = (nomeAluno) => {
   
    
    let media = (buscaNome(nomeAluno)[0].notas.reduce((acumulador,nota) => {
        return acumulador + nota}) / buscaNome(nomeAluno)[0].notas.length);

    if (media >= 7 && buscaNome(nomeAluno)[0].faltas < 4) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }

}

aplicarNota("Henrique")
=======
// implementação
>>>>>>> 79a1b43993aa78a0e46b44d061146080ad395b87
