// criando variaveis do tipo Array (Vetor)

var dinos = ["Tiranosauro rex", "Estegossauro", "Brontossauro"];

// imprimindo  os dados em forma de linha
console.log(dinos);
// impriindo os dados em forma de tabela
console.table(dinos);

// lenght -> "Tamanho" do Array (Qualidade de Elementos )
console.log("o Vetor tem", dinos.length, "elementos");

// imprimir elementos a partir do indice
console.log(dinos[2]);

// push -> adiciona um novo elementos no final da fila
dinos.push("Anquilossauro");
console.table(dinos);
console.group("o vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("o vetor tem", dinos.length, "elementos");

// obter um elemento a partir do indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:, dino[3]");
console.log("20ª posição (Não Existe):", dinos[20]);

// shift -> remover um elemento do inicio do vetor (primeiro  elemento)
dinos.shift();
console.table(dinos);
console.log("O Vetor agora tem", dinos.length,  "elementos");

// splice -> remover um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluido a partir do indice .
dinos.splice(1, 1);
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// adicionar mais elemento ao vetor
dinos.push("pterodáctilo");
dinos.push("Estegossauro");
dinos.push("argentinossauro");

//procurar um elemento a partir do nome (discrição)
//indexOf(procurado) -> retorna o indice do elemento no vetor
let procurar = "Estegossauro";
let indice = dinos.indexOf(procurar);
console.log("O", procurar, "está no indice", indice);

// indexOf(procurado) -> retorna 1 caso não encontre o elemento
procurado  = "Cristianossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurar, "está no indice:", indice);
dinos.splice(indice, 1);
console.table(dinos);

// Alterar valor de um elemento a partir do indice 
dinos[1] = "anquilossauro";
console.table(dinos);

// slice -> Criar uma cópia do Vetor
let novaLista = dinos.slice(); // Cópia completa do vetor dinos
console.table(novaLista);


let listaParcial = dinos.slice(1, 3); // Cria uma cópia do vetor dinos a partir do indice onde começa e onde termina a copia
console.table(listaParcial);
