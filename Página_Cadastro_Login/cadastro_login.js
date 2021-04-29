/*

DESAFIO 1: Incrementar funcionalidade de login
Criar um campo login
Validar login e senha se estiverem corretos
Apagar input do login e da senha após verificação

DESAFIO 2: Seleção de opções duplas
Criar um select com as seguintes opções: Frutas, Cores, Jogos
Para cada opção selecionada, você irá criar um novo select com as opções relacionadas à primeira opção.
Exemplo:
Se selecionou Frutas, no outro select irá ter as opções Maçã, Banana, Abacaxi
Se selecionou Cores, no outro select irá ter as opções Amarelo, Verde, Vermelho

DESAFIO 3: Mudar a criação de inputs agora usando while

*/

var senhaCorreta = "";
var email = "";
var senhaRepetida = "";

function cadastrar() {
  senhaCorreta = document.getElementById("password").value;
  email = document.getElementById("email").value;
  senhaRepetida = document.getElementById("password2").value;

  if (senhaCorreta == senhaRepetida) {
    alert("Usuário Cadastrado !");
    var html =
      '<div id="senha"> <input type="email" id="emailLogin" placeholder="Insira seu email..." /> <input type="password" id="passwordLogin" placeholder="Insira sua senha..."/> <button onclick="entrar()">Fazer Login</button></div>';
    var pgLogin = document.getElementById("senha");
    pgLogin.innerHTML = html;
  } else if (senhaRepetida != senhaCorreta) {
    alert("Repita a senha certa !");
  }
  password.value = "";
  password2.value = "";
}

function entrar() {
  var login = document.getElementById("passwordLogin").value;
  var emailLogin = document.getElementById("emailLogin").value;

  if (email != emailLogin) {
    alert("Usuário Incorreto !");
  } else if (senhaCorreta != login) {
    alert("Senha Incorreta !");
  } else {
    alert("Usuário Logado!");
  }
  password.value = "";
}
