const cadastrar = (event) => {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let lista = document.getElementById("lista");

  let novoItem = document.createElement("li");
  novoItem.innerText = "Nome: " + nome + "\nEmail: " + email;

  lista.appendChild(novoItem);
  lista.get
};