// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
            /* QUESTÕES EM ABERTO (11, 14) */

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const userAltura = prompt(`Altura? ${altura}`)
  const userLargura = prompt(`Largura? ${largura}`)
  const areaRetangulo = userAltura * userLargura
  
  console.log(areaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  const perguntaAno = prompt(`Digite o ano atual? ${anoAtual}`)
  const perguntaIdade = prompt(`Sua idade? ${anoNascimento}`)
  const idade = perguntaAno - perguntaIdade

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let perguntaPeso = Number(prompt(`Qual o seu peso em KG? ${peso}`))
  let perguntaAltura = Number(prompt(`Qual a sua altura em Metros? ${altura}`))
  const resultadoIMC  = Number(perguntaPeso / (perguntaAltura * perguntaAltura))

  return(resultadoIMC.toFixed(1))
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const userNome = prompt(`Seu nome? ${nome}`)
  const userIdade = Number(prompt(`Sua idade? ${idade}`))
  const userEmail = prompt(`Seu email? ${email}`)

  console.log(`Meu nome é ${userNome}, tenho ${userIdade} anos, e o meu email é ${userEmail}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  const primeiraCor = prompt(`Primeira cor favorita? ${cor1}`)
  const segundaCor = prompt(`Segunda cor favorita? ${cor2}`)
  const terceiraCor = prompt(`Terceira cor favorita? ${cor3}`)
  const coresFavoritas = [primeiraCor, segundaCor, terceiraCor]
  
  console.log(coresFavoritas)
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = prompt(`Diga alguma coisa: ${string}`)
  const fraseMaiuscula = frase.toUpperCase()
  
  return(fraseMaiuscula)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoTeatro = Number(custo)
  const valorDeCadaIngresso = Number(valorIngresso)
  const precisaVender = custoTeatro / valorDeCadaIngresso
  return(precisaVender)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const frase1 = prompt(`Diga alguma coisa: ${string1}`)
  const frase2 = prompt(`Diga alguma coisa: ${string2}`)
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length
  const resultado = tamanhoString1 == tamanhoString2

  return(resultado)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]

  return(primeiroElemento) // HARD

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length -1]
  
  return(ultimoElemento)
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const inveterArray = array.reverse()

return(inveterArray) /* (CASO 3 NÃO DEU, ERRO AINDA) */
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
// implemente sua lógica aqui
const primeriaString = string1
const segundaString = string2 
const igualdadeStrings = string1.toLowerCase() === string2.toLowerCase()

return(igualdadeStrings)
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, AnoCarteiraDeIdentidade) {
  // implemente sua lógica aqui
let userAno = Number(prompt(`Qual o ano atual?`))
let userNascimento = Number(prompt(`Sua data de nascimento?`))
let userIdentidade = Number(prompt(`Ano da emissão da sua carteira de identidade?`))
let idade = userAno - userNascimento

const menorOu20 = (idade <= 20) && (userIdentidade + 5) <= userAno
const entre20E50 = (idade > 20 && idade <= 50) && (userIdentidade + 10) <= userAno
const maiorDe50 = idade > 50 && (userIdentidade + 15) < userAno

console.log(menorOu20 || entre20E50 || maiorDe50)
}



// EXERCÍCIO 14
function checaAnoBissexto() {
  // implemente sua lógica aqui
  
const anoBissexto = ano % 400 == 0
const anoBissexto2 = ano % 100 != 0 && ano % 4 == 0
//const resultado1 = anoBissexto == true

console.log(anoBissexto && anoBissexto2)  /* NÃO ENTENDI */



}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maiorIdade = confirm(`Você tem mais de 18 anos?`)
const ensinoMedio = confirm(`Você possui ensino médio completo?`)
const disponibilidadeHorarios = confirm(`Você possui disponibilidade exclusiva durante os horários do curso?`)
const resultado = maiorIdade && ensinoMedio && disponibilidadeHorarios == true

console.log(resultado)

}