// Swith Case -> estrutura de decisão usada quando queremos comparar o valor de
// //uma variavel com vários possíveis resultados
// REGRA SO PROFCASTELLO - se tiver mais que 3 comparadores, faça um switch case

// exemplo 01 - MENU
// Neste exemplo a vairiavel menuselecioando guardará o nome de uma opção de menu.
// o  switch verificar qual foi a opção escolhida e exibe uma mensagem correspondente

let menuSelecionado = "123456";
switch (menuSelecionado) {
  case "Home":
    console.log("Você clicou no link '123456'");
    break;
  case "Quem somos":
    console.log("Você clicou no link 'Quem somos'");
    break;
  case "Contato":
    console.log("Você clicou no link 'contato'");
    break;
  default:
    console.log("opção incorreta, selecione uma opção no menu!");
    break;
  case "redes sociais":
    console.log("Você clicou no link 'redes sociais'");
    break;
  case "pague um café":
    console.log("Você clicou no link 'pague um café'");
    break;
}

// pague um café
// redes sociais
