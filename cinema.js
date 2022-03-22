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
    for (var i = 0; i < dados.length; i++) {
        if (cod === dados[i].codigo) {
            console.log(`-------------------\n
            Codigo: ${dados[i].codigo}\n
            Titulo: ${dados[i].titulo}\n
            Duração: ${dados[i].duracao} hora(s)\n
            Atores: ${dados[i].atores.join(", ")}\n
            Ano de lançamento: ${dados[i].anoDeLancamento}\n
            Em cartaz: ${dados[i].emCartaz === true ? "Sim" : "Não"}\n`)
            break
        }
    }
}


// ALTERA O STATUS DE ESTAR OU NAO EM CARTAZ DE UM FILME ** ATUALIZADO COM CALLBACK **

const alterarStatusEmCartaz = (cod, funcBuscar) => {
    for (var i = 0; i < dados.length; i++) {
        if (cod === dados[i].codigo) {
            dados[i].emCartaz == true ? dados[i].emCartaz = false : dados[i].emCartaz = true
            funcBuscar(cod)
        }
    }
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
/* alterarStatusEmCartaz(2, buscarFilme) */

// * TESTE DE EXECUÇÃO PARA BUSCA DE FILMES * //
/* buscarFilme(1) */

// * TESTE DE EXECUÇÃO PARA ADICIONAR FILME * //
/* console.log(dados)
adicionarFilme(4,"TopGun",2,["Pablo", "Cruz","Will Smith"], 1994, false)
console.log(dados) */

// * TESTE DE EXECUÇÃO BUSCAR FILME * //
/* buscarFilme(3) */

// * TESTE DE EXECUÇÃO FILMES LONGOS * //
/* listarFilmesDeLongaDuracao(dados) */
