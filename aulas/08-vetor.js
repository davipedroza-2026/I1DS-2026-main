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
