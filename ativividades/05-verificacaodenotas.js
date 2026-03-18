
/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.

    Considere as seguintes regras:

        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado

    A função deve retornar uma frase indicando a situação do aluno.
*/ 

// function Verificação (Notas) {
//   if (nota < 5) {
//     return "Reprovado";
//   } else if (nota < 7) { 
//     return "Recuperação";
//   } else { 
//     return "Aprovado";
//   }
// }

// console.log(verificarSituacao(5));
// console.log(verificarSituacao(7)); 


// Parte 02 - solução + parte extra
function situacaoFinal(n1, n2, n3, n4) { 
    let media = (n1 + n2 + n3 + n4) /4;

    if (media < 5) { 
        return "Reprovado";
    }  else if (media < 7) {
        return "Recuperação";
    } else { 
    return "Aprovado";
    }
}
console.log(situacaoFinal(7, 8, 6, 5));
console.log(situacaoFinal(7, 7, 7, 7));

function final(n1, n2, n3, n4) { 
  let media = (n1 + n2 + n3 + n4)  / 4;
  let situacao;

  if (media < 5) situacao = "Reprovado";
  else if (media < 7) situacao = "Recuperação";
  else situacao = "Aprovado"; 

  return "Média: " + media + "- situação: " + situacao; 
}
console.log(Final(nota1, 8, 6, 5));
