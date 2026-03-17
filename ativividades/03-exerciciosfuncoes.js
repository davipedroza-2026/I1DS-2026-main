/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.



2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/

function nasci(dataNascimento) {
  let idade = 2026 - dataNascimento;
  return idade;
}
console.log("Você irá fazer", nasci(2010), "anos");

function kms(combustivel) {
  let veiculo = combustivel * 12;
  return veiculo;
}

console.log("seu veiculo pode viajam", kms(75), "km");
