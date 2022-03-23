const dados = require('./database/catalogo.json')


// ADICIONA FILME A LISTA DE CATALOGO

const adicionarFilme = (cod, titulo, duracao, atores, anoDeLancamento, emCartaz) => {
    var newFilme = {
        cod,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz
    }
    dados.push(newFilme)
}


// BUSCA ITENS ATRAVES DO CODIGO ID DO FILME

const buscarFilme = (cod) => {
    dados.findIndex(element => {
        if (cod === element.codigo) {
            console.log(`-------------------\n
            Codigo: ${element.codigo}\n
            Titulo: ${element.titulo}\n
            Duração: ${element.duracao} hora(s)\n
            Atores: ${element.atores.join(", ")}\n
            Ano de lançamento: ${element.anoDeLancamento}\n
            Em cartaz: ${element.emCartaz === true ? "Sim" : "Não"}\n`)
        }
    })
}


// ALTERA O STATUS DE ESTAR OU NAO EM CARTAZ DE UM FILME ** ATUALIZADO COM CALLBACK **

const alterarStatusEmCartaz = (cod, funcBuscar) => {
    dados.findIndex(codigo => {
        if (cod === codigo.codigo) {
            codigo.emCartaz == true ? codigo.emCartaz = false : codigo.emCartaz = true
            funcBuscar(cod)
        }
    })
}

// LISTAR TODOS OS FILMES DO CATALOGO ** ATUALIZADO COM FOREACH **

const listarTodosOsFilmes = (catalogo) => {
    console.log("Os filmes disponiveis são:")
    catalogo.forEach(element => {
        console.log(`-------------------\n
        Codigo: ${element.codigo}\n
        Titulo: ${element.titulo}\n
        Duração: ${element.duracao} hora(s)\n
        Atores: ${element.atores.join(", ")}\n
        Ano de lançamento: ${element.anoDeLancamento}\n
        Em cartaz: ${element.emCartaz === true ? "Sim" : "Não"}\n`)
    });
}


// LISTAR APENAS FILMES EM CARTAZ

const listarFilmesEmCartaz = (catalogo) => {
    for (var i = 0; i < catalogo.length; i++) {
        if (catalogo[i].emCartaz === true) {
            console.log(`-------------------\n
            Codigo: ${catalogo[i].codigo}\n
            Titulo: ${catalogo[i].titulo}\n
            Duração: ${catalogo[i].duracao} hora(s)\n
            Atores: ${catalogo[i].atores.join(", ")}\n
            Ano de lançamento: ${catalogo[i].anoDeLancamento}\n
            Em cartaz: ${catalogo[i].emCartaz === true ? "Sim" : "Não"}\n`)
        }
    }
}


// LISTAR APENAS FILMES COM MAIS APARTIR DE 2 HORAS

const listarFilmesDeLongaDuracao = (catalogo) => {
    catalogo.filter(duracao => {
        if (duracao.duracao >= 2) {
            console.log(`-------------------\n
            Codigo: ${duracao.codigo}\n
            Titulo: ${duracao.titulo}\n
            Duração: ${duracao.duracao} hora(s)\n
            Atores: ${duracao.atores.join(", ")}\n
            Ano de lançamento: ${duracao.anoDeLancamento}\n
            Em cartaz: ${duracao.emCartaz === true ? "Sim" : "Não"}\n`)
        }
    })
}


// ---------------------------ZONA DE TESTE------------------------------------//
// -------------------------------------------------------------------------- //

// * TESTE DE EXECUÇÃO LISTAR FILMES * //
/* listarTodosOsFilmes(dados) */

// * TESTE DE EXECUÇÃO LISTAR FILMES EM CARTAZ * //
/* listarFilmesEmCartaz(dados) */

// * TESTE DE ALTERAÇÃO DE STATUS DE CARTAZ * //
/* alterarStatusEmCartaz(3, buscarFilme) */

// * TESTE DE EXECUÇÃO PARA BUSCA DE FILMES * //
/* buscarFilme(3) */

// * TESTE DE EXECUÇÃO PARA ADICIONAR FILME * //
/* console.log(dados)
adicionarFilme(4,"TopGun",2,["Pablo", "Cruz","Will Smith"], 1994, false)
console.log(dados) */

// * TESTE DE EXECUÇÃO BUSCAR FILME * //
/* buscarFilme(dados, 2) */

// * TESTE DE EXECUÇÃO FILMES LONGOS * //
/* listarFilmesDeLongaDuracao(dados) */
