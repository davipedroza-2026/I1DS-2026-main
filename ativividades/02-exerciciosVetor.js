/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

// Exercicio array de frutas
var frutas = ["banana", "Maçã", "Pera", "Uva", "Morango",]; 

// push -> adicionar um novo elemento no final da fila
frutas.push("Tangirina");
console.group("o vetor agora tem", frutas.length, "elementos");

// unshift -> adicionar um novo elemento no inicio da fila 
frutas.unshift("goiaba");
console.table(frutas); 
console.log("o vetor tem", frutas.length, "elementos");

// imprimir elementos a partir do indice
console.log(frutas[5]);

// shift -> remover um elemento do indice do vetor (quarto elemento)
frutas.shift();
console.table(frutas);
console.log("o vetor agora tem", frutas.length, "elementos");

// splice -> remover um elemento a partir de um indice, e tambem precisa
frutas.splice(3, 1);
console.table(frutas);
console.log("o vetor agora tem", frutas.length, "elementos");

// slice -> criar uma cópia do vetor
let novaLista = frutas.slice(); //cópia completa do vetor frutas 
console.table(novaLista);

let listaParcial = frutas.slice(2, 5); // Cria uma copia do vetor frutas a partir do indice onde começa e onde termina a copia 
console.table(listaParcial);